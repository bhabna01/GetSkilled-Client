import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const CourseCard = ({ category }) => {
    const { _id, title, details, image_url } = category;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>

                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt className='ms-2'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Read more</Link></p>

                                :
                                <p>{details}</p>


                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseCard;