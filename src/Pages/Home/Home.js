import React from 'react';
import { Carousel } from 'react-bootstrap';

import pic2 from '../../images/pic2.png'
import pic3 from '../../images/pic3.png'

const Home = () => {
    return (
        <div className='mb-5'>
            <Carousel variant="dark">

                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block"
                        src={pic2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Explore Our courses</h5>
                        <p>Get Skilled in programming languages</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded mx-auto d-block"
                        src={pic3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Explore Our courses</h5>
                        <p>
                            Get Skilled in programming languages
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    );
};

export default Home;