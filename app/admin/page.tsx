'use client';

import React, {useEffect, useState, useCallback} from 'react';
import {Layout, Menu, theme, Table, Button, message} from 'antd';
import type { TableColumnsType, MenuProps } from 'antd';
import {Registration, ResponseMessage} from "@/app/lib/definitions";
import {FormOutlined,ExportOutlined,LogoutOutlined} from "@ant-design/icons";
import * as XLSX from "xlsx";

interface MenuItem {
    key: string,
    label: string,
}
const courseItems: MenuItem[] = [{
    key: '佛山彩灯',
    label: '佛山彩灯'
}, {
    key: '广东剪纸',
    label: '广东剪纸'
}, {
    key: '佛山秋色',
    label: '佛山秋色'
}, {
    key: '佛山狮头',
    label: '佛山狮头'
}];
const items: MenuProps['items'] = [{
    key: '报名表',
    icon: <FormOutlined />,
    label: '报名表',
    children: courseItems
}, {
    key: '导出数据',
    icon: <ExportOutlined />,
    label: '导出数据',
}, {
    key: '退出登录',
    icon: <LogoutOutlined />,
    label: '退出登录'
}]

const { Header, Content, Footer, Sider } = Layout;
const padLeft2 = (nr: any, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
const padLeft3 = (nr: any, len = 3, chr = `0`) => `${nr}`.padStart(3, chr);
const formatDatetime = (datetime: string) => {
    const dt = new Date(datetime);
    return `${dt.getFullYear()}-${padLeft2(dt.getMonth()+1)}-${padLeft2(dt.getDate())} ${padLeft2(dt.getHours())}:${padLeft2(dt.getMinutes())}:${padLeft2(dt.getSeconds())}.${padLeft3(dt.getMilliseconds())}`;
}
const formatFilename = () => {
    const dt = new Date();
    return `报名表_${dt.getFullYear()}${padLeft2(dt.getMonth()+1)}${padLeft2(dt.getDate())}.xlsx`;
}

const columns: TableColumnsType<Registration> = [
    {
        title: '报名时间',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (text, record) => formatDatetime(text)
    },
    {
        title: '家长电话',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '学生名',
        dataIndex: 'student',
        key: 'student',
        responsive: ['md'],
    },
    {
        title: '家长名',
        dataIndex: 'parent',
        key: 'parent',
        responsive: ['lg'],
    },
];


export default function Page() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState<Registration[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const fetchRegistrations = useCallback(async () => {
        setIsLoading(true);
        try {
            const requestHeaders: HeadersInit = new Headers();
            requestHeaders.set('Authentication', localStorage.getItem('authentication')!);
            const res = await fetch(`/api/rgst?course=${courseItems[current].key}`, { headers: requestHeaders });
            const message: ResponseMessage = await res.json();
            if (!message.success) {
                messageApi.open({ type: "error", content: message.message });
                if (message.message === '无权限操作') {
                    localStorage.removeItem('authentication');
                    window.location.href = '/login';
                }
            } else {
                setData(message.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [current]);
    useEffect(() => {
        fetchRegistrations().then(r => console.log('fetch registrations'));
    }, [fetchRegistrations])
    const exportRegistrations = useCallback(async () => {
        setIsExporting(true);
        try {
            const requestHeaders: HeadersInit = new Headers();
            requestHeaders.set('Authentication', localStorage.getItem('authentication')!);
            const res = await fetch(`/api/rgst`, { headers: requestHeaders });
            const message: ResponseMessage = await res.json();
            if (!message.success) {
                messageApi.open({ type: "error", content: message.message });
                if (message.message === '无权限操作') {
                    localStorage.removeItem('authentication');
                    window.location.href = '/login';
                }
            } else {
                const dataToExport = message.data.map((item: Registration) => ({
                    '课程': item.course,
                    '报名时间': formatDatetime(item.created_at),
                    '手机号码': item.phone,
                    '学生姓名': item.student,
                    '家长姓名': item.parent,
                }));
                const workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
                XLSX.utils.book_append_sheet(workbook, worksheet, '报名表');
                // Save the workbook as an Excel file
                XLSX.writeFile(workbook, formatFilename());
                setIsCollapsed(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsExporting(false);
        }
    }, []);

    return (
        <Layout className="h-screen">
            {contextHolder}
            <Sider
                collapsed={isCollapsed}
                breakpoint="lg"
                collapsedWidth="0"
                defaultCollapsed
                collapsible
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    setIsCollapsed(collapsed)
                }}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['佛山彩灯']}
                    onClick={(e) => {
                        const index = courseItems.findIndex((item) => item.key === e.key);
                        // 点击报名表
                        if (index > -1) {
                            setCurrent(index);
                            setIsCollapsed(true);
                        }
                        // 点击导出数据
                        if (e.key === '导出数据') {
                            exportRegistrations();
                        }
                        // 点击退出登录
                        if (e.key === '退出登录') {
                            localStorage.removeItem('authentication');
                            window.location.href = '/login';
                        }
                    }}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <div className="p-4 text-3xl">{`${courseItems[current].label} 报名表`}</div>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                {!isLoading ? (
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Table columns={columns} dataSource={data} rowKey="id" pagination={false}/>
                    </div>
                ) : (
                    <div role="status" className="min-h-[300px] flex justify-center items-center">
                        <svg aria-hidden="true"
                             className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
                </Content>
            </Layout>
        </Layout>
    );
}