import React from 'react';
import { Layout, Row, Col, Card } from 'antd';

const { Meta } = Card;

const About = () => {
    return (
        <div>
            <Layout>
                <Row>
                    <Col span={24}>
                        <p style={{ textAlign: 'right', fontSize: '13pt', fontWeight: 'bold' }}>
                            همه ما انسان‌ها تقریباً در هر دقیقه زندگی‌مان در حال تصمیم‌گیری هستیم. این تصمیمات می‌توانند؛ مانند انتخاب غذایی که می‌خوریم و یا کلماتی که به زبان می‌آوریم کوچک باشند و یا به اندازه انتخاب رشته تحصیلی و یا محل زندگی بزرگ باشند. تصمیم‌گیری می‌تواند بین شرایط ریسک و اطمینان باشد، می‌تواند رضایت کوتاه‌مدت را در مقابل منافع بلندمدت متعادل کند. تصمیمات ما می‌توانند به طور مشخص اشتباه یا درست باشند؛ اما اکثر مواقع شامل احتمالات و شاید‌ها هستند. حتی وقتی اطلاعات زیادی در اختیار داشته باشیم، نمی‌توانیم از این عدم قطعیت‌ها جلوگیری کنیم.این پلتفرم با هدف ارائه یک سیستم جمع سپاری تصمیم گیری برای کمک به انجام تصمیم گیری فردی در موضوعات مهاجرت، تحصیلی و سفر توسعه یافته است.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 4 }} span={24} offset={3} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="../Images/r.jpg" />}
                        >
                            <Meta title="رضا خردمندی" description='کارشناسی مهندسی کامپیوتر' />
                        </Card>
                    </Col>
                    <Col md={{ span: 6, offset: 6 }} span={24} offset={3} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="../Images/a.jpg" />}
                        >
                            <Meta title="امیر محمد بامداد" description='کارشناسی مهندسی کامپیوتر' />
                        </Card>
                    </Col>
                </Row>

                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 4 }} span={24} offset={3} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="../Images/b.jpg" />}
                        >
                            <Meta title="بهار خلیلیان" description='کارشناسی مهندسی کامپیوتر' />
                        </Card>
                    </Col>
                    <Col md={{ span: 6, offset: 6 }} span={24} offset={3} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="../Images/e.jpg" />}
                        >
                            <Meta title="الهه رهبران" description='کارشناسی مهندسی کامپیوتر' />
                        </Card>
                    </Col>
                </Row>

                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 10, offset: 10 }} span={24} offset={3} style={{ marginTop: '20px' }}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="../Images/h.jpg" />}
                        >
                            <Meta title="حسام محبی" description='کارشناسی مهندسی کامپیوتر' />
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default About;