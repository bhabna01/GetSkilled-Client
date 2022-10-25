import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';

const Courses = () => {
    return (
        <div>
            <Row>
                <Col lg='2'>
                    <LeftsideNav></LeftsideNav>
                </Col>

            </Row>
        </div>
    );
};

export default Courses;