import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftsideNav from '../Pages/Shared/LeftsideNav/LeftsideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {/* <Col lg='2'>
                        <LeftsideNav></LeftsideNav>
                    </Col> */}
                    <Col lg='7'>

                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <h2>Right side nav</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;