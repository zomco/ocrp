"use client"

import Image from "next/image";
import bg from "@/public/slides/bg.png";
import dc1 from "@/public/slides/dc1.png";
import dc2 from "@/public/slides/dc2.png";
import dc3 from "@/public/slides/dc3.png";
import dc4 from "@/public/slides/dc4.png";
import dc5 from "@/public/slides/dc5.png";
import dc7 from "@/public/slides/dc7.png";
import dc8 from "@/public/slides/dc8.png";
import dc9 from "@/public/slides/dc9.png";
import dc11 from "@/public/slides/dc11.png";
import dc12 from "@/public/slides/dc12.png";
import dc14 from "@/public/slides/dc14.png";
import React from "react";
import {Button, Form, Input, Select, message, Result} from 'antd';
import {zcoolKuaiLe} from '@/app/ui/fonts';
import dc31 from "@/public/slides/dc31.png";
import {useState} from "react";
import {ResponseMessage} from "@/app/lib/definitions";

const {Option} = Select;

export default function Slide6({ shown } : { shown: boolean }) {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [isSubmit, setIsSubmit] = useState(false);
    const formOpened = false;
    return (
        <div className="relative h-screen">
            {contextHolder}
            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
            <Image
                className="absolute z-[2]" fill
                src={dc2} alt="dc2"/>
            <Image
                className="absolute z-[3] transition-all" fill
                style={{transform: shown ? 'translateY(0em)' : 'translateY(8rem)', opacity: shown ? '1' : '0' }}
                src={dc3} alt="dc3"/>
            <Image className="absolute z-[10] top-3 right-6 animate-spin bg-black rounded-[50%] w-[2em] h-[2em] object-contain p-1" src={dc31} alt="dc31"/>
            <div className="absolute z-[5] top-[10%] left-[50%] translate-x-[-50%] w-[50%] h-[8vh]">
                <Image
                    className="transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(-2rem)', opacity: shown ? '1' : '0' }}
                    fill src={dc5} alt="dc5"/>
                <Image
                    className="absolute top-[-50%] right-[2%] w-[30%] transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                    src={dc4} alt="dc4"/>
                <Image
                    className="absolute top-[11%] left-[-30%] w-[30%] transition-all"
                    style={{transform: shown ? 'rotate(0)' : 'rotate(-30deg)', opacity: shown ? '1' : '0' }}
                    src={dc8} alt="dc8"/>
                <Image
                    className="absolute top-[-50%] left-[15%] w-[30%] transition-all"
                    style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    src={dc9} alt="dc9"/>
                <div
                    className={`absolute w-full h-full px-6 text-[1.5rem] text-white text-center content-center flex justify-center items-center ${zcoolKuaiLe.className} transition-all`}
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(-2rem)', opacity: shown ? '1' : '0' }}
                >报名表
                </div>
            </div>
            <div className="absolute z-[32] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%]">
                <Image
                    className="absolute z-[7] top-[-12%] right-[0%] w-[15%] transition-all"
                    style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    src={dc7} alt="dc7"/>
                <Image
                    className="absolute z-[10] top-[-10%] left-[-8%] w-[20%] transition-all"
                    style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    src={dc11} alt="dc11"/>
                <Image
                    className="absolute z-[11] top-[40%] left-[-20%] w-[20%] transition-all"
                    style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    src={dc12} alt="dc12"/>
                {!formOpened ? (
                    <Result
                        status="info"
                        title="报名尚未开放"
                        subTitle="报名入口于7月18日开放"
                        className="transition-all"
                        style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    />
                ):(
                    isSubmit ? (
                    <Result
                        status="success"
                        title="报名成功"
                        subTitle="请等候工作人员联系"
                        className="transition-all"
                        style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    />
                    ):(
                    <Form
                        name="normal_login"
                        className="transition-all"
                        style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                        initialValues={{remember: true}}
                        onFinish={async (values: any) => {
                            setIsLoading(true);
                            try {
                                const res = await fetch('/api/rgst', {
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
                                    setIsSubmit(true);
                                }
                            } catch (error) {
                                messageApi.open({ type: "error", content: '网络问题，请重试' });
                                console.error(error);
                            } finally {
                                setIsLoading(false);
                            }
                        }}
                        onFinishFailed={(error: any) => {
                            console.log('Failed: ', error.message);
                        }}
                    >
                        <Form.Item
                            name="student"
                            rules={[{required: true, pattern: /^(?:[\u4e00-\u9fa5·]{2,6})$/, message: '请输入学生姓名'}]}
                        >
                            <Input size="large" placeholder="学生姓名"/>
                        </Form.Item>
                        <Form.Item
                            name="parent"
                            rules={[{required: true, pattern: /^(?:[\u4e00-\u9fa5·]{2,6})$/, message: '请输入家长姓名'}]}
                        >
                            <Input size="large" placeholder="家长姓名"/>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[{
                                required: true,
                                pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[01256789]))\d{8}$/
                                ,
                                message: '请输入家长手机'
                            }]}
                        >
                            <Input size="large" placeholder="家长手机"/>
                        </Form.Item>
                        <Form.Item
                            name="course"
                            rules={[{required: true, message: '请选择课程'}]}
                        >
                            <Select size="large" placeholder="请选择课程">
                                <Option value="佛山剪纸">佛山剪纸</Option>
                                <Option value="佛山狮头">佛山狮头</Option>
                                <Option value="佛山秋色">佛山秋色</Option>
                                <Option value="金铂锻造技艺">金铂锻造技艺</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="w-full"
                                loading={isLoading}
                            >提交</Button>
                        </Form.Item>
                    </Form>
                ))}
            </div>
            <div className="absolute z-[7] bottom-[0%] left-[50%] translate-x-[-50%] w-[100%] h-[10vh]">
                <Image
                    className="transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                    fill src={dc1} alt="dc1"/>
                <Image
                    className="absolute top-[-75%] right-0 w-[50%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                    src={dc14} alt="dc14"/>
            </div>
        </div>
    );
}