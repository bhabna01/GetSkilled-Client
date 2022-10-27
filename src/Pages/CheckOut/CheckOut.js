import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkout = useLoaderData();
    const { title, price } = checkout;
    return (
        <div className='container-fluid question w-50 border shadow-lg p-3 bg-body rounded mt-5 mb-5'>
            <div>
                <p className='fw-bold fs-5'>Name:<small>{title}</small></p>
                <p className='fw-bold  fs-5'>Price:<small>{price}</small></p>
                <Button>Proceed to Checkout</Button>
            </div>

        </div>
    );
};

export default CheckOut;
