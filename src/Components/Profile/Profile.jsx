import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Row,
    Col, Modal
} from 'antd';

import './Profile.css';


const Profile = () => {

    const [name, setName] = useState('s');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const onFinish = (values) => {
        localStorage.setItem('InfoUser1', values);
        Modal.success({
            title: 'اطلاعات با موفقیت ثبت شد',
            onOk() { }
        })
    }

    return (
        <div>
            <>
                <Row>
                    <Col span={20} offset={4}>
                        <Form
                            initialValues={{
                                remember: true,
                            }}
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            style={{
                                maxWidth: 900,
                                marginTop: '20px'
                            }}
                            onFinish={onFinish}
                            className="login-form form"
                        >
                            <Form.Item label="جنسیت"
                                name="gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'جنسیت الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}
                            >
                                <Radio.Group>
                                    <Radio value="male"> مرد </Radio>
                                    <Radio value="female"> زن </Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="تحصیلات" name="education"
                                rules={[
                                    {
                                        required: true,
                                        message: 'تحصیلات الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}>
                                <Select>
                                    <Select.Option value="demo">دیپلم</Select.Option>
                                    <Select.Option value="demo">فوق دیپلم</Select.Option>
                                    <Select.Option value="demo">لیسانس</Select.Option>
                                    <Select.Option value="demo">فوق لیسانس</Select.Option>
                                    <Select.Option value="demo">دکترا</Select.Option>
                                    <Select.Option value="demo">فوق دکترا</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="سن" name="age"
                                rules={[
                                    {
                                        required: true,
                                        message: 'سن الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}>
                                <InputNumber />
                            </Form.Item>

                            <Form.Item label="نام" name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'نام الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}>

                                <Input />
                            </Form.Item>

                            <Form.Item label="نام خانوادگی" name="lastname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'نام خانوادگی الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="ایمیل" name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'ایمیل الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="شماره همراه" name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'شماره همراه الزامی است!',
                                    },
                                ]}
                                style={{ marginBottom: '50px' }}>
                                <Input />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    تایید
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            </>
        </div>
    )
}

export default Profile;