import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';

const Categories = () => {
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

export default Categories;