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
import {Button, Form, Input, Select} from 'antd';
import {zcoolKuaiLe} from '@/app/ui/fonts';

const {Option} = Select;

export default function Slide6() {
    return (
        <div className="relative h-screen">
            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
            <Image
                className="absolute z-[2]" fill
                src={dc2} alt="dc2"/>
            <Image
                className="absolute z-[3]" fill
                src={dc3} alt="dc3"/>
            <div className="absolute z-[5] top-[10%] left-[50%] translate-x-[-50%] w-[50vw] h-[8vh]">
                <Image fill src={dc5} alt="dc5"/>
                <Image
                    className="absolute top-[-50%] right-[2%] w-[30%]"
                    src={dc4} alt="dc4"/>
                <Image
                    className="absolute top-[11%] left-[-30%] w-[30%]"
                    src={dc8} alt="dc8"/>
                <Image
                    className="absolute top-[-50%] left-[15%] w-[30%]"
                    src={dc9} alt="dc9"/>
                <div
                    className={`absolute w-full h-full px-6 text-[1.5rem] text-white text-center content-center ${zcoolKuaiLe.className}`}>报名表
                </div>
            </div>
            <div className="absolute z-[32] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%]">
                <Image
                    className="absolute z-[7] top-[-12%] right-[0%] w-[15%]"
                    src={dc7} alt="dc7"/>
                <Image
                    className="absolute z-[10] top-[-10%] left-[-8%] w-[20%]"
                    src={dc11} alt="dc11"/>
                <Image
                    className="absolute z-[11] top-[40%] left-[-20%] w-[20%]"
                    src={dc12} alt="dc12"/>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={(values: any) => {
                        console.log('Received values of form: ', values);
                    }}
                >
                    <Form.Item
                        name="studentName"
                        rules={[{required: true, pattern: /^(?:[\u4e00-\u9fa5·]{2,6})$/, message: '请输入学生姓名'}]}
                    >
                        <Input size="large" placeholder="学生姓名"/>
                    </Form.Item>
                    <Form.Item
                        name="parentName"
                        rules={[{required: true, pattern: /^(?:[\u4e00-\u9fa5·]{2,6})$/, message: '请输入家长姓名'}]}
                    >
                        <Input size="large" placeholder="家长姓名"/>
                    </Form.Item>
                    <Form.Item
                        name="parentPhone"
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
                            <Option value="1">课程1</Option>
                            <Option value="2">课程2</Option>
                            <Option value="3">课程3</Option>
                            <Option value="4">课程4</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit" className="w-full">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="absolute z-[7] bottom-[0%] left-[50%] translate-x-[-50%] w-[100vw] h-[10vh]">
                <Image fill src={dc1} alt="dc1"/>
                <Image
                    className="absolute top-[-75%] right-0 w-[50%]"
                    src={dc14} alt="dc14"/>
            </div>
        </div>
    );
}