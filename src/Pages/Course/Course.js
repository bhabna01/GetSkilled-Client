import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    const { title, image_url, details, category_id } = course;
    return (
        <div>
            <Card className='w-50 container-fluid'>
                <Card.Img variant="top" src={image_url} />
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