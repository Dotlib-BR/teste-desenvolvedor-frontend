/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Hero from './sections/Hero/Hero';

const Home = (): React.ReactElement => {
    return (
        <>
            <Hero />
        </>
    );
};

export default Home;
