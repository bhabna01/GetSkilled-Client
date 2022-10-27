import React from 'react';
import { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
const Course = () => {
    const course = useLoaderData();
    const { title, image_url, details, category_id } = course;
    const ref = useRef();
    return (
        <div className=' mt-5 ' >
            <ReactToPrint trigger={() => <Button className='ms-5'>Download Pdf</Button>} content={() => ref.current}></ReactToPrint>

            <Card className='w-50 container-fluid' ref={ref}>
                <Card.Img className='mt-2' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All Courses in this category</Button>

                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Course;