import React from 'react';
import { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import CourseCard from '../Shared/CourseCard/CourseCard';


const Categories = () => {
    const categories = useLoaderData();
    const ref = useRef();
    return (
        <div className='container-fluid mt-5'>
            <ReactToPrint trigger={() => <Button>Download Pdf</Button>} content={() => ref.current}></ReactToPrint>
            <Row>
                <Col lg='3'>
                </Col>
                <Col lg='5' ref={ref} className='w-50 mt-5'>
                    {
                        categories.map(category => <CourseCard key={category._id}
                            category={category}>
                        </CourseCard>)
                    }

                </Col>

            </Row>



        </div>
    );
};

export default Categories;