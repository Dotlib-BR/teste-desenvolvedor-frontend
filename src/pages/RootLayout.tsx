import React from 'react';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const RootLayout = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default RootLayout;
