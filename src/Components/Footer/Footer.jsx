import React from 'react';
import { Layout, Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined, RiseOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Layout>
                <Row>
                    <Col span={24} style={{ backgroundColor: '#001529' }}>
                        <Row style={{ marginTop: '20px' }}>
                            <Col span={24} md={{ span: 12 }}>
                                <Row >
                                    <Col className='style' span={24} >
                                        <PhoneOutlined style={{ color: 'white', fontSize: '30px' }} />
                                        <span style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}>+98 912345678</span>
                                    </Col>
                                    <Col className='style' span={24} >
                                        <RiseOutlined style={{ color: 'white', fontSize: '30px' }} />
                                        <span style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}>دانشگاه اصفهان</span>
                                    </Col>
                                    <Col className='style' span={24} >
                                        <MailOutlined style={{ color: 'white', fontSize: '30px' }} />
                                        <span style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}>DeciCrowd@gmail.com</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24} md={{ span: 12 }}>
                                <Row>
                                    <Col className='style2' span={24} style={{ color: 'white', fontSize: '17px' }}>
                                        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>درباره ی ما</div>
                                        <div style={{ textAlign: 'right' }}>
                                            همه ما انسان‌ها تقریباً در هر دقیقه زندگی‌مان در حال تصمیم‌گیری هستیم. این تصمیمات می‌توانند؛ مانند انتخاب غذایی که می‌خوریم و یا کلماتی که به زبان می‌آوریم کوچک باشند و یا به اندازه انتخاب رشته تحصیلی و یا محل زندگی بزرگ باشند. تصمیم‌گیری می‌تواند بین شرایط ریسک و اطمینان باشد، می‌تواند رضایت کوتاه‌مدت را در مقابل منافع بلندمدت متعادل کند. تصمیمات ما می‌توانند به طور مشخص اشتباه یا درست باشند؛ اما اکثر مواقع شامل احتمالات و شاید‌ها هستند. حتی وقتی اطلاعات زیادی در اختیار داشته باشیم، نمی‌توانیم از این عدم قطعیت‌ها جلوگیری کنیم.این پلتفرم با هدف ارائه یک سیستم جمع سپاری تصمیم گیری برای کمک به انجام تصمیم گیری فردی در موضوعات مهاجرت، تحصیلی و سفر توسعه یافته است.
                                        </div>
                                    </Col>
                                    {/* <Row>
                                        <Col span={8} className='social'><InstagramOutlined /></Col>
                                        <Col span={8} className='social'><LinkedinOutlined /></Col>
                                        <Col span={8} className='social'><TwitterOutlined /></Col>
                                    </Row> */}
                                </Row>
                            </Col>
                            <Col span={24} style={{ color: 'white', fontSize: '17px', marginBottom: '30px', marginTop: '40px' }}>
                                Copyright © 2023 Developer All rights reserved.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default Footer;