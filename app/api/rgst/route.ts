import { headers } from 'next/headers'
import { type NextRequest } from 'next/server'
import {sql} from '@vercel/postgres';
import {Registration, ResponseMessage} from '../../lib/definitions';
import { z, ZodError } from 'zod';
import { unstable_noStore as noStore } from 'next/cache';
import {NeonDbError} from "@neondatabase/serverless";
import jwt from "jsonwebtoken";

const RegistrationSchema = z.object({
    id: z.string(),
    course: z.enum(['佛山剪纸', '佛山狮头', '佛山秋色', '金铂锻造技艺']),
    parent: z.string(),
    phone: z.string(),
    student: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
});
const CreateRegistration = RegistrationSchema.omit({ id: true, created_at: true, updated_at: true, });

export async function GET(request: NextRequest) {
    const headersList = headers();
    const authentication = headersList.get('authentication');
    if (!authentication) {
        return Response.json({
            success: false,
            message: '无权限操作',
            data: [],
        })
    }
    const token = authentication.split(" ")[1];
    if (!token) {
        return Response.json({
            success: false,
            message: '无权限操作',
            data: [],
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        const { username, password } = decoded as { username: string; password: string };
        if (!(username === process.env.ADMIN_NAME && password === process.env.ADMIN_PASS)) {
            return Response.json({
                success: false,
                message: '无权限操作',
                data: []
            })
        }
    } catch (error) {
        return Response.json({
            success: false,
            message: '无权限操作',
            data: []
        })
    }
    noStore();
    const searchParams = request.nextUrl.searchParams;
    const course = searchParams.get('course');
    try {
        if (!!course) {
            const data = await sql<Registration>`
              SELECT *
              FROM registration
              WHERE registration.course = ${course}
              ORDER BY registration.created_at DESC`;
            return Response.json({
                success: true,
                message: '获取成功',
                data: data.rows
            });
        } else {
            const data = await sql<Registration>`
              SELECT *
              FROM registration`;
            return Response.json({
                success: true,
                message: '获取成功',
                data: data.rows
            });
        }

    } catch (error) {
        console.error('database error:', error);
        const e = error as Error;
        return Response.json({
            success: false,
            message: '获取失败',
            data: [],
        });
    }
}

export async function POST(request: Request) {
    const headersList = headers();
    const referer = headersList.get('referer');
    const body = await request.json();
    if (!body) {
        return Response.json({
            success: false,
            message: `参数缺失`,
            data: {},
        })
    }
    try {
        const { parent, phone, student, course } = CreateRegistration.parse({
            course: body.course,
            parent: body.parent,
            phone: body.phone,
            student: body.student,
        });
        await sql`
            INSERT INTO registration (course, parent, phone, student)
            VALUES (${course}, ${parent}, ${phone}, ${student})`;
        return Response.json({
            success: true,
            message: '提交成功',
            data: {}
        });
    } catch (error) {
        console.error('save registration error:', error);
        if (error instanceof ZodError) {
            return Response.json({
                success: false,
                message: '参数无效',
                data: {},
            });
        }
        if (error instanceof NeonDbError && error.code === '23505') {
            return Response.json({
                success: true,
                message: '报名信息已存在',
                data: {},
            });
        }
        const e = error as Error;
        return Response.json({
            success: false,
            message: `提交失败`,
            data: {},
        });
    }
}