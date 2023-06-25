import React, { useEffect } from 'react';
import { Collapse, Row, Col, Form, Input, Button } from 'antd';

const { TextArea } = Input;

const NewTask_SUser = () => {

    const items = [
        {
            key: '1',
            label: 'سفر',
            children:
                <p>
                    سلام، من قصد دارم به منظور خرید به جنوب ایران سفر کنم. بیشتر هدفم خرید پوشاک است و دنبال بهترین بندر برای خرید این اقلام هستم.
                </p>,
        },
        {
            key: '2',
            label: 'تحصیلی',
            children:
                <p>
                    من دانشجوی کارشناسی هستم و در حال حاضر معدل یا GPA خوبی ندارم با اینحال ممکن است قصد ادامه تحصیل در مقطع کارشناسی ارشد را داشته باشم. چه تصمیمی باید بگیرم؟
                </p>
        },
        {
            key: '3',
            label: 'مهاجرت',
            children:
                <p>
                    سلام. من به زودی به کشوی دیگر مهاجرت میکنم و به دلیل مشکلات مالی در حال حاضر باید با افرادی دیگر زندگی کنم. اما نمیتوانم تصمیم بگیرم که هم خانه ای هایم را از میان افراد متعلق به همان کشور انتخاب کنم یا از افراد مهاجر دیگر.
                </p>,
        },
        {
            key: '4',
            label: 'تحصیلی',
            children:
                <p>
                    من مدرک کارشناسی توی رشته مهندسی معماری دارم و الان قصد دارم کارشناسی ارشد رو هم بگیرم ولی نمیدونم توی گرایش معماری داخلی بگیرم یا نظارت. علایقم به سمت طراحی و اجرا هست ولی بازار کار هم برام خیلی مهمه‌.
                </p>
        },
        {
            key: '5',
            label: 'مهاجرت',
            children:
                <p>
                    سلام من در حال حاضر توی یه شرکت در شهر اصفهان کار میکنم ولی یه موقعیت کاری تو شعب دیگه برام پیش اومده که حقوق بسیار بهتری داره. میتونم بین شعبه شیراز و شعبه رشت یکی رو انتخاب کنم ولی برام خیلی مهمه که فرهنگ مردم اون شهر به اصفهان نزدیک باشه و اینکه شرایط آب و هوایی هم خوب باشه. نظرات تون رو لطفا بیان کنید.
                </p>
        },
    ];

    let i = 6;
    const onFinish = (values) => {
        console.log(values);
        items.push({
            key: i,
            label: values.categorie,
            children:
                <p>
                    {values.question}
                </p>
        })
        i += 1;
    };

    

    return (
        <div>
            <Row>
                <Col span={24}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label='طبقه بندی پرسش'
                            name="categorie"
                            rules={[
                                {
                                    required: true,
                                    message: 'الزامی است!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label='پرسش جدید'
                            name="question"
                            rules={[
                                {
                                    required: true,
                                    message: 'الزامی است!',
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '40px' }}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                ثبت
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row style={{ marginTop: '100px' }}>
                <Col span={24}>
                    <p style={{ textAlign: 'right', fontSize: '25pt', fontWeight: 'bold' }}>پرسشهای از پیش ثبت شده</p>
                    <Collapse accordion items={items} />
                </Col>
            </Row>
        </div>
    )
}

export default NewTask_SUser;