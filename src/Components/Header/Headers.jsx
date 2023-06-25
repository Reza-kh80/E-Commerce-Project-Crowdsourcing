import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BulbOutlined,
    UserOutlined,
    BorderOutlined,
    PhoneOutlined,
    SearchOutlined,
    PoweroffOutlined,
    RadiusUpleftOutlined,
    RadiusBottomrightOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Input, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Contents from '../Contenet/Contenet';

import './Headers.css';

const { Header, Sider, Content } = Layout;

const Headers = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    const Exit = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    }

    return (
        <div dir='rtl'>
            <Layout style={{ height: '100%' }}>
                {localStorage.getItem('token') ?
                    localStorage.getItem('role') === 'crowdWorker' ?
                        <>
                            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '260vh' }}>
                                <div className="demo-logo-vertical" />
                                <Menu
                                    style={{ marginTop: '9px' }}
                                    theme="dark"
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                >
                                    <Menu.Item>
                                        <span role='img' aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <BorderOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/'>صفحه اصلی</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <UserOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/userProfile'>تکمیل اطلاعات</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <RadiusUpleftOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/newTask'>پرسش های جدید</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <RadiusBottomrightOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/progressTask'>پرسش و پاسخ ها</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <BulbOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/about_us'>درباره ی ما</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <PoweroffOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='#' onClick={Exit}>خروج</Nav.Link></span>
                                    </Menu.Item>

                                </Menu>
                            </Sider>
                            <Layout>
                                <Header
                                    style={{
                                        padding: 0,
                                        background: colorBgContainer,
                                    }}
                                >
                                    <Row>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={2}>
                                                    <Button
                                                        type="text"
                                                        icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                                                        onClick={() => setCollapsed(!collapsed)}
                                                        style={{
                                                            fontSize: '16px',
                                                            width: 64,
                                                            height: 64,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            marginRight: '15px'
                                                        }}
                                                    />
                                                </Col>
                                                <Col span={2}>
                                                    <p style={{ margin: 0, fontWeight: 'bold', fontSize: '20pt' }}>
                                                        DeciCrowd
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={11}>
                                            <Input placeholder='جستجو...' prefix={<SearchOutlined style={{ fontSize: '20px' }} />} />
                                        </Col>
                                    </Row>
                                </Header>
                                <Content
                                    style={{
                                        margin: '24px 16px',
                                        padding: 24,
                                        minHeight: 280,
                                        // background: colorBgContainer,   
                                    }}
                                >
                                    <Contents />
                                </Content>
                            </Layout>
                        </>
                        :
                        <>
                            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '260vh' }}>
                                <div className="demo-logo-vertical" />
                                <Menu
                                    style={{ marginTop: '9px' }}
                                    theme="dark"
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                >
                                    <Menu.Item>
                                        <span role='img' aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <BorderOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/'>صفحه اصلی</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <UserOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/userProfile'>تکمیل اطلاعات</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <RadiusUpleftOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/newTaskCrowdSourced'>ثبت پرسش جدید</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <RadiusBottomrightOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/progressTaskCrowdSourced'>پرسش و پاسخ های شما</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <BulbOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='/about_us'>درباره ی ما</Nav.Link></span>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                            <PoweroffOutlined />
                                        </span>
                                        <span className='ant-menu-title-content'><Nav.Link href='#' onClick={Exit}>خروج</Nav.Link></span>
                                    </Menu.Item>

                                </Menu>
                            </Sider>
                            <Layout>
                                <Header
                                    style={{
                                        padding: 0,
                                        background: colorBgContainer,
                                    }}
                                >
                                    <Row>
                                        <Col span={12}>
                                            <Row>
                                                <Col span={2}>
                                                    <Button
                                                        type="text"
                                                        icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                                                        onClick={() => setCollapsed(!collapsed)}
                                                        style={{
                                                            fontSize: '16px',
                                                            width: 64,
                                                            height: 64,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            marginRight: '15px'
                                                        }}
                                                    />
                                                </Col>
                                                <Col span={2}>
                                                    <p style={{ margin: 0, fontWeight: 'bold', fontSize: '20pt' }}>
                                                        DeciCrowd
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={11}>
                                            <Input placeholder='جستجو...' prefix={<SearchOutlined style={{ fontSize: '20px' }} />} />
                                        </Col>
                                    </Row>
                                </Header>
                                <Content
                                    style={{
                                        margin: '24px 16px',
                                        padding: 24,
                                        minHeight: 280,
                                        // background: colorBgContainer,   
                                    }}
                                >
                                    <Contents />
                                </Content>
                            </Layout>
                        </>
                    :
                    <>
                        <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '260vh' }}>
                            <div className="demo-logo-vertical" />
                            <Menu
                                style={{ marginTop: '9px' }}
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                            >
                                <Menu.Item>
                                    <span role='img' aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                        <BorderOutlined />
                                    </span>
                                    <span className='ant-menu-title-content'><Nav.Link href='/'>صفحه اصلی</Nav.Link></span>
                                </Menu.Item>

                                <Menu.Item>
                                    <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                        <UserOutlined />
                                    </span>
                                    <span className='ant-menu-title-content'><Nav.Link href='/login'>ورود و ثبت نام</Nav.Link></span>
                                </Menu.Item>

                                <Menu.Item>
                                    <span aria-label='border' className='anticon anticon-border ant-menu-item-icon'>
                                        <BulbOutlined />
                                    </span>
                                    <span className='ant-menu-title-content'><Nav.Link href='/about_us'>درباره ی ما</Nav.Link></span>
                                </Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout>
                            <Header
                                style={{
                                    padding: 0,
                                    background: colorBgContainer,
                                }}
                            >
                                <Row>
                                    <Col span={12}>
                                        <Row>
                                            <Col span={2}>
                                                <Button
                                                    type="text"
                                                    icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                                                    onClick={() => setCollapsed(!collapsed)}
                                                    style={{
                                                        fontSize: '16px',
                                                        width: 64,
                                                        height: 64,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginRight: '15px'
                                                    }}
                                                />
                                            </Col>
                                            <Col span={2}>
                                                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '20pt' }}>
                                                    DeciCrowd
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={11}>
                                        <Input placeholder='جستجو...' prefix={<SearchOutlined style={{ fontSize: '20px' }} />} />
                                    </Col>
                                </Row>
                            </Header>
                            <Content
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    minHeight: 280,
                                    // background: colorBgContainer,   
                                }}
                            >
                                <Contents />
                            </Content>
                        </Layout>
                    </>
                }
            </Layout>
        </div>
    )
}

export default Headers;