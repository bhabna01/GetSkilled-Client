import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaGlideG, FaGraduationCap, FaUser, IconName } from "react-icons/fa";
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className="navbar navbar-expand-lg header">
            <div className="container-fluid">
                <FaGraduationCap className='fs-2 text-white'></FaGraduationCap>
                <h2 className=''>GetSkilled</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto  mt-3 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq">FAQ</Link>
                        </li>

                        <li className='nav-item text-white me-2 ms-3 mb-3 '>

                            {
                                user?.uid ?
                                    <>
                                        <span className=' me-2'> {user?.displayName}</span>
                                        {user?.photoURL ?
                                            <Image className='me-2' style={{ height: '40px' }} roundedCircle src={user?.photoURL} title={user?.displayName}></Image>
                                            :
                                            <FaUser></FaUser>
                                        }
                                        <Button onClick={handleLogOut}>Logout</Button>
                                    </>

                                    :
                                    <>
                                        <Link to="/login">Login</Link>

                                        <Link to="/register">Register</Link>


                                    </>
                            }

                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;
