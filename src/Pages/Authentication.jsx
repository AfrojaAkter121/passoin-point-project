import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Authentication = () => {
    return (
        <div className='text-white'>
            <div
            className=''
             style={{
            backgroundImage:
              "url('https://i.ibb.co/Df2yygdr/cat-9401282-1920.jpg')",
          }}>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;