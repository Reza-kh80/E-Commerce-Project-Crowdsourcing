import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        if (values.username === 'reza' && values.password === '123') {
            localStorage.setItem('token', 'JSagbastgvhg12545tgvdsvdbb8992jbnsvdbsvdnhjhwhvbsdvdsjhjsb');
            localStorage.setItem('role', 'crowdWorker');
            Modal.success({
                title: 'کارگر جمعیت',
                content: 'کاربر عزیز خوش آمدی!',
                onOk() { navigate('/') }
            })
        } else if (values.username === 'elahe' && values.password === '123') {
            localStorage.setItem('token', 'JSagbastgvhgdsdsds12545tgvdsvdbb8992jbnsvdbsvdnhjhwhvbsdvdsjhjsb');
            localStorage.setItem('role', 'crowdSourced');
            Modal.success({
                title: 'جمع سپار',
                content: 'کاربر عزیز خوش آمدی!',
                onOk() { navigate('/') }
            })
        } else {
            Modal.error({
                title: 'خطا',
                content: 'کاربری با این مشخصات یافت نشد!',
                onOk() { }
            })
        }
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Row>
                <Col span={16} offset={4}>
                    <Form
                        name="normal_login"
                        className="login-form form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'نام کاربری الزامی است!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="نام کاربری"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'رمز عبور الزامی است!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="رمز عبور"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>مرا به خاطر بسپار</Checkbox>
                            </Form.Item>
                            <br />
                            <br />
                            <a className="login-form-forgot" href="">
                                فراموشی رمز
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                ورود
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login;