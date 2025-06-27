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
    course: z.enum(['佛山彩灯', '广东剪纸', '佛山秋色', '佛山狮头']),
    parent: z.string(),
    phone: z.string(),
    student: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
});
const CreateRegistration = RegistrationSchema.omit({ id: true, created_at: true, updated_at: true, });

export async function GET(request: NextRequest) {
    const headersList = await headers();
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
    const startMills = new Date("2025-06-04T10:00:00.000+08:00").getTime();
    const stopMills = new Date("2025-07-05T0:00:00.000+08:00").getTime();
    const currentMills = Date.now();
    if (startMills - currentMills > 0) {
        return Response.json({
            success: false,
            message: '报名未开始',
            data: [(startMills - currentMills) / 1000],
        })
    }
    const headersList = await headers();
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
        const data = await sql`
              SELECT COUNT(*)
              FROM registration
              WHERE registration.course = ${course}`;
        console.log(`registration count: ${parseInt(data.rows[0].count)}`);
        if (data.rows.length > 0 && parseInt(data.rows[0].count) > 40) {
            return Response.json({
                success: false,
                message: '课程满员',
                data: {}
            })
        }
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