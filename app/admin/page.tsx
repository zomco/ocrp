'use client';

import React, { useState } from 'react';
import { Layout, Menu, theme, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { fetchRegistrationsByCourse } from "@/app/lib/data";

interface MenuItem {
    key: string,
    label: string,
}

const items: MenuItem[] = [{
    key: '1',
    label: '佛山剪纸'
}, {
    key: '2',
    label: '佛山狮头'
}, {
    key: '3',
    label: '佛山秋色'
}, {
    key: '4',
    label: '金箔锻造技艺'
}];

const { Header, Content, Footer, Sider } = Layout;

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name (all screens)',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age (medium screen or bigger)',
        dataIndex: 'age',
        key: 'age',
        responsive: ['md'],
    },
    {
        title: 'Address (large screen or bigger)',
        dataIndex: 'address',
        key: 'address',
        responsive: ['lg'],
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
];

export default function Page() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [current, setCurrent] = useState<MenuItem>(items[0]);

    return (
        <Layout className="h-screen">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => {
                        setCurrent(items[parseInt(e.key) - 1])
                    }}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    <div className="p-4 text-3xl">{`${current.label}课程报名表`}</div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}