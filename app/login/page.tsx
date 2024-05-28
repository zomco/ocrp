'use client';

import React, {useState} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Form, Input, message} from 'antd';
import {ResponseMessage} from "@/app/lib/definitions";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            {contextHolder}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={async (values) => {
                    setIsLoading(true);
                    try {
                        const res = await fetch('/api/auth', {
                            method: "POST",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(values)
                        });
                        const message: ResponseMessage = await res.json();
                        if (!message.success) {
                            messageApi.open({ type: "error", content: message.message });
                        } else {
                            localStorage.setItem('authentication', message.data.authentication);
                            window.location.href = '/admin';
                        }
                    } catch (error) {
                        messageApi.open({ type: "error", content: '网络问题，请重试' });
                        console.error(error);
                    } finally {
                        setIsLoading(false);
                    }
                }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="用户名"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={isLoading}
                        type="primary"
                        htmlType="submit"
                        className="w-full"
                    >登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}