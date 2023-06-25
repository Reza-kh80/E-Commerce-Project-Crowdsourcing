import React from 'react';
import { Carousel, Row, Col } from 'antd';
import { DonutChart } from 'react-circle-chart'

const Main = () => {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Carousel autoplay>
                        <div style={{ height: '400px', width: '100%' }}>
                            <img src="./Images/5.jpg" alt="1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ height: '400px', width: '100%' }}>
                            <img src="./Images/2.jpg" alt="1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ height: '400px', width: '100%' }}>
                            <img src="./Images/6.jpg" alt="1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row style={{ marginTop: '80px' }}>
                <Col md={{ span: 8 }} span={24}>
                    <DonutChart size={200} items={[{ value: 30 }, { value: 20 }, { value: 10 }]} />
                    <p style={{ fontSize: '15pt', fontWeight: 'bold' }}>تعداد جمع سپاران</p>
                </Col>
                <Col md={{ span: 8 }} span={24}>
                    <DonutChart size={200} items={[{ value: 30 }, { value: 20 }, { value: 15 }]} />
                    <p style={{ fontSize: '15pt', fontWeight: 'bold' }}>تعداد کارگران جمعیت</p>
                </Col>
                <Col md={{ span: 8 }} span={24}>
                    <DonutChart size={200} items={[{ value: 30 }, { value: 20 }, { value: 30 }]} />
                    <p style={{ fontSize: '15pt', fontWeight: 'bold' }}>آمار جمع سپاری ما</p>
                </Col>
            </Row>

            <Row style={{ marginTop: '30px' }}>
                <Col span={24}>
                    <p style={{ fontSize: '14pt', textAlign: 'right' }} >
                        انسان‌ها همواره در حال تصمیم‌گیری در زندگی خود هستند. این تصمیمات می‌توانند هم به‌صورت پیچیده و هم به‌صورت تصمیمات ساده روزانه باشند. امروزه با توجه به تعدد تصمیماتی که هر فرد در روز می‌گیرد، نیاز به پلتفرمی جهت کمک به تصمیم‌گیری فردی احساس می‌شود.
                        اغلب افراد برای حصول اطمینان از این که بهترین تصمیم را گرفته‌اند با دیگران مشورت می‌کنند؛ اما در حال حاضر هیچ پلتفرم تخصصی در کشور وجود ندارد که به افراد این اجازه را بدهد که مشکلات خود را با دیگران مطرح کنند و از نظرات آن‌ها، مستقل از موقعیت جغرافیایی‌شان استفاده کنند.
                        برخی از شبکه‌های اجتماعی امکانات نظرسنجی از دیگران را به‌صورت محدود به کاربران ارائه می‌دهند؛ اما قابلیت ارائه هیچ تحلیل تخصصی را ندارد.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <p style={{ textAlign: 'right', fontSize: '20pt', fontWeight: 'bold' }}>جمع‌سپاری چیست؟</p>
                    <p style={{ fontSize: '14pt', textAlign: 'right' }}>
                        جمع‌سپاری مجموعه‌ای از اطلاعات، نظرات یا کار گروهی از افراد است که معمولاً از طریق اینترنت تهیه می‌شود. این مفهوم یک اصطلاح فراگیر برای مجموعه‌ای از ابزارها، رویکردها و مفاهیمی است که با فرایند برون‌سپاری کار (از جمله جستجوی ایده‌ها) به گروه بزرگ و احتمالاً ناشناخته‌ای از افراد (جمعیت) معمولاً خارج از سازمان سروکار دارد.
                        در واقع جمع‌سپاری را می‌توان به‌عنوان روشی برای توزیع کار به تعداد زیادی از کارگران (جمعیت) در نظر گرفت.
                    </p>
                </Col>
            </Row>

            <Row style={{ marginTop: '20px' }}>
                <Col span={24}>
                    <img style={{ height: 250, width: 250, borderRadius: '50%' }} src="./Images/l3.png" alt="Logo" />
                </Col>
            </Row>
        </div>
    )
}

export default Main;