import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUser(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 ms-0" controlId="formBasicEmail">
                    <Form.Label className='m-0'>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Full Name" />

                </Form.Group>
                <Form.Group className="mb-3 ms-0" controlId="formBasicEmail">
                    <Form.Label className='m-0'>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL" />

                </Form.Group>
                <Form.Group className="mb-3 ms-0" controlId="formBasicEmail">
                    <Form.Label className='m-0'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p> Already have an Account?<Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;