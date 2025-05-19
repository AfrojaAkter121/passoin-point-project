import React from 'react';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div>
            auth
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;