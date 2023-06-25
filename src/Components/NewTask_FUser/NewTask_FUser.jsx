import React from 'react';
import { Collapse, Input, Form, Button } from 'antd';

const { TextArea } = Input;

const NewTask = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const items = [
        {
            key: '1',
            label: 'سفر',
            children:
                [<p>
                    سلام، من قصد دارم به منظور خرید به جنوب ایران سفر کنم. بیشتر هدفم خرید پوشاک است و دنبال بهترین بندر برای خرید این اقلام هستم.
                </p>,
                <Form
                    labelCol={{ span: 11 }}
                    layout="horizontal"
                    style={{ maxWidth: 800 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='comment'
                        label="نظر شما"
                        rules={[
                            {
                                required: true,
                                message: 'الزامی است',
                            }
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ثبت
                        </Button>
                    </Form.Item>
                </Form>
                ]

        },
        {
            key: '2',
            label: 'تحصیلی',
            children:
                [<p>
                    من دانشجوی کارشناسی هستم و در حال حاضر معدل یا GPA خوبی ندارم با اینحال ممکن است قصد ادامه تحصیل در مقطع کارشناسی ارشد را داشته باشم. چه تصمیمی باید بگیرم؟
                </p>,
                <Form
                    labelCol={{ span: 11 }}
                    layout="horizontal"
                    style={{ maxWidth: 800 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='comment'
                        label="نظر شما"
                        rules={[
                            {
                                required: true,
                                message: 'الزامی است',
                            }
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ثبت
                        </Button>
                    </Form.Item>
                </Form>
                ]
        },
        {
            key: '3',
            label: 'مهاجرت',
            children:
                [<p>
                    سلام. من به زودی به کشوی دیگر مهاجرت میکنم و به دلیل مشکلات مالی در حال حاضر باید با افرادی دیگر زندگی کنم. اما نمیتوانم تصمیم بگیرم که هم خانه ای هایم را از میان افراد متعلق به همان کشور انتخاب کنم یا از افراد مهاجر دیگر.
                </p>,
                <Form
                    labelCol={{ span: 11 }}
                    layout="horizontal"
                    style={{ maxWidth: 800 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='comment'
                        label="نظر شما"
                        rules={[
                            {
                                required: true,
                                message: 'الزامی است',
                            }
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ثبت
                        </Button>
                    </Form.Item>
                </Form>
                ]
        },
        {
            key: '4',
            label: 'تحصیلی',
            children:
                [<p>
                    من مدرک کارشناسی توی رشته مهندسی معماری دارم و الان قصد دارم کارشناسی ارشد رو هم بگیرم ولی نمیدونم توی گرایش معماری داخلی بگیرم یا نظارت. علایقم به سمت طراحی و اجرا هست ولی بازار کار هم برام خیلی مهمه‌.
                </p>,
                <Form
                    labelCol={{ span: 11 }}
                    layout="horizontal"
                    style={{ maxWidth: 800 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='comment'
                        label="نظر شما"
                        rules={[
                            {
                                required: true,
                                message: 'الزامی است',
                            }
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ثبت
                        </Button>
                    </Form.Item>
                </Form>
                ]
        },
        {
            key: '5',
            label: 'مهاجرت',
            children:
                [<p>
                    سلام من در حال حاضر توی یه شرکت در شهر اصفهان کار میکنم ولی یه موقعیت کاری تو شعب دیگه برام پیش اومده که حقوق بسیار بهتری داره. میتونم بین شعبه شیراز و شعبه رشت یکی رو انتخاب کنم ولی برام خیلی مهمه که فرهنگ مردم اون شهر به اصفهان نزدیک باشه و اینکه شرایط آب و هوایی هم خوب باشه. نظرات تون رو لطفا بیان کنید.
                </p>,
                <Form
                    labelCol={{ span: 11 }}
                    layout="horizontal"
                    style={{ maxWidth: 800 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='comment'
                        label="نظر شما"
                        rules={[
                            {
                                required: true,
                                message: 'الزامی است',
                            }
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            ثبت
                        </Button>
                    </Form.Item>
                </Form>
                ]
        },
    ];

    return (
        <div>
            <Collapse accordion items={items} />
        </div>
    )
}

export default NewTask;