import React from 'react';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const RootLayout = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayout;
