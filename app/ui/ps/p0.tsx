"use client"

import Image from "next/image";
import bg from "@/public/ps/bgp0.png";
import ava0 from "@/public/ps/ava0.png";
import ava2 from "@/public/ps/ava2.png";
import React from "react";
import {Button, Form, Input, Select, message, Result} from 'antd';
import {useState} from "react";
import {ResponseMessage} from "@/app/lib/definitions";
import './p0.css';

const {Option} = Select;

export default function P0({ shown } : { shown: boolean }) {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [isSubmit, setIsSubmit] = useState(false);
    return (
        <div className="relative h-screen">
            {contextHolder}
            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
            <div className="absolute z-[32] top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%]">
                <div
                    className={`content-center flex justify-center items-center transition-all mb-14`}
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(-2rem)', opacity: shown ? '1' : '0'}}
                >
                    <div
                        className={'px-5 font-bold text-[1.6rem] text-center text-white bg-[#76c051] rounded-full'}>-线上报名-
                    </div>
                </div>
                {
                    isSubmit ? (
                        <Result
                            status="success"
                            title="提交成功"
                            subTitle="请等候工作人员联系"
                            className="transition-all"
                            style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0'}}
                        />
                    ) : (
                        <Form
                            name="normal_login"
                            className="transition-all"
                            style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0'}}
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
                                        messageApi.open({type: "error", content: message.message});
                                    } else {
                                        setIsSubmit(true);
                                    }
                                } catch (error) {
                                    messageApi.open({type: "error", content: '网络问题，请重试'});
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
                                className={"ym-form-item"}
                                rules={[{
                                    required: true,
                                    pattern: /^(?:[\u4e00-\u9fa5·]{2,6})$/,
                                    message: '请输入孩子姓名'
                                }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="孩子姓名"
                                    className={'yw-input'}
                                />
                            </Form.Item>
                            <Form.Item
                                name="parent"
                                className={"ym-form-item"}
                                rules={[{
                                    required: true,
                                    pattern: /^(?:[\u4e00-\u9fa5·]{2,6})$/,
                                    message: '请输入家长姓名'
                                }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="家长姓名"
                                    className={'yw-input'}
                                />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                className={"ym-form-item"}
                                rules={[{
                                    required: true,
                                    pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[01256789]))\d{8}$/
                                    ,
                                    message: '请输入家长电话'
                                }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="家长电话"
                                    className={'yw-input'}
                                />
                            </Form.Item>
                            <Form.Item
                                name="course"
                                className={"ym-form-item"}
                                rules={[{required: true, message: '选择课程'}]}
                            >
                                <Select className={'yw-select'} size="large" placeholder="请选择课程">
                                    <Option className={'yw-option'} value="佛山剪纸">佛山剪纸</Option>
                                    <Option className={'yw-option'} value="佛山木雕">佛山木雕</Option>
                                    <Option className={'yw-option'} value="小龙舟制作">小龙舟制作</Option>
                                    <Option className={'yw-option'} value="岭南书法">岭南书法</Option>
                                    <Option className={'yw-option'} value="大良鱼灯">大良鱼灯</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                className={"yw-form-button"}
                            >
                                <Button
                                    size="large"
                                    type="primary"
                                    htmlType="submit"
                                    className="w-full yw-button"
                                    loading={isLoading}
                                >提交</Button>
                            </Form.Item>
                        </Form>
                    )}
                <div className="flex flex-col content-center justify-center">
                    <div className="text-center yw-text1">活动咨询:0757-28338073</div>
                    <div className="text-center yw-text2">佛山市非物质文化遗产保护中心</div>
                    <div className="text-center yw-text3">注：信息提交成功后，请学生家长留意工作人员电话通知(来电号码为固话)，经电话确认后方为报名成功</div>
                </div>
            </div>
            <div className="absolute z-[7] bottom-[-5%] left-[50%] translate-x-[-50%] w-[100%] h-[30vh]">
                <Image
                    className="absolute bottom-[-8%] right-[-18%] w-[80%] transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0'}}
                    src={ava0} alt="ava0"/>
                <Image
                    className="absolute bottom-[15%] left-[-15%] w-[75%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0'}}
                    src={ava2} alt="ava2"/>
            </div>
        </div>
    );
}