import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftsideNav from '../Pages/Shared/LeftsideNav/LeftsideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>


            <Outlet></Outlet>



        </div>
    );
};

export default Main;