import {headers} from "next/headers";
import {sql} from "@vercel/postgres";
import {z, ZodError} from "zod";
import {NeonDbError} from "@neondatabase/serverless";
import jwt from "jsonwebtoken";

const AuthSchema = z.object({
    username: z.string(),
    password: z.string(),
    captcha: z.string(),
});
const CreateAuth = AuthSchema.omit({ captcha: true });
const generateToken = (payload: string | object) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1y' });
    return `Bearer ${token}`;
};

export async function POST(request: Request) {
    const body = await request.json();
    if (!body) {
        return Response.json({
            success: false,
            message: `参数缺失`,
            data: {},
        })
    }
    const { username, password } = CreateAuth.parse({
        username: body.username,
        password: body.password,
    });
    if (username === process.env.ADMIN_NAME && password === process.env.ADMIN_PASS) {
        return Response.json({
            success: true,
            message: '提交成功',
            data: {
                authentication: generateToken({ username, password }),
            }
        });
    } else {
        return Response.json({
            success: false,
            message: '用户名或密码不匹配',
            data: {}
        });
    }
}