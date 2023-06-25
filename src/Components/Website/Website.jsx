import React from 'react';
import { Layout, Row, Col } from 'antd';
// import { useLocation } from 'react-router-dom';
import './Website.css';


// import components
import Headers from '../Header/Headers';
import Content from '../Contenet/Contenet';
import Footer from '../Footer/Footer';

const Website = () => {
    return (
        <div>
            <Layout>
                <Row>
                    <Col span={24}>
                        <Headers />
                        {/* <Content /> */}
                        <Footer />
                    </Col>
                </Row>
            </Layout>

        </div>
    )
}

export default Website;