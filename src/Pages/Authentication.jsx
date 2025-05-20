import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Authentication = () => {
    return (
        <div >
            <div
            className=''
             style={{
            backgroundImage:
              "url('https://i.ibb.co/ymyTfLHx/gustavo-zambelli-JMK4lyhn-GM-unsplash.jpg')",
          }}>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;