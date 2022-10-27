import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import CourseCard from '../Shared/CourseCard/CourseCard';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';
import './Course.css';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5'>Featured Courses</h1>
            <Row>
                <Col lg='3' className=' text-center  mb-5  p-3 '>
                    <LeftsideNav></LeftsideNav>
                </Col>

                <Col lg='7' className='course-container mt-5 w-40'>


                    {

                        allCourses.map(category => <CourseCard

                            category={category}
                            key={category._id}

                        >

                        </CourseCard>)
                    }


                </Col>

            </Row>
        </div>
    );
};

export default Courses;