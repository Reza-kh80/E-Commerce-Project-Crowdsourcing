import React, { Suspense } from 'react';
import { Row, Col } from 'antd';
import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
import About from '../About/About';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ProgressTask_FUser from '../ProgressTask_FUser/ProgressTask_FUser';
import NewTask_FUser from '../NewTask_FUser/NewTask_FUser';
import ProgressTask from '../progressTask/ProgressTask';
import NewTask_SUser from '../NewTask_SUser/NewTask_SUser';

function Contenet() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Suspense>
                        <Routes>
                            <Route path='/' element={<Main />} />
                            <Route path='/about_us' element={<About />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/userProfile' element={<Profile />} />
                            <Route path='/newTask' element={<NewTask_FUser />} />
                            <Route path='/progressTask' element={<ProgressTask_FUser />} />
                            <Route path='/progressTaskCrowdSourced' element={<ProgressTask />} />
                            <Route path='/NewTaskCrowdSourced' element={<NewTask_SUser />} />
                        </Routes>
                    </Suspense>
                </Col>
            </Row>
        </div>
    );
}

export default Contenet;