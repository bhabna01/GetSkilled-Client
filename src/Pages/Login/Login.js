import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {
    const { providerLogin, gitLogin } = useContext(AuthContext)
    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext)
    const nevigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }
    const handleGitSignIn = () => {
        gitLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const from = location.state?.from?.pathname || '/'
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                nevigate(from, { repalce: true });

            })
            .catch(error => {

                console.error(error);
                setError(error.message);


            })

    }
    return (
        <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 ms-0" controlId="formBasicEmail">
                    <Form.Label className='m-0'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <div className='d-flex flex-column justify-content-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant='outline-primary ' className='mb-2'><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGitSignIn} variant='outline-dark' className='mb-2'><FaGithub></FaGithub> Login with Github </Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default Login;
