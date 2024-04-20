/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Hero from './sections/Hero/Hero';
import { IMedicine } from '../../@types/medicine';
import { useMedicine } from '../../hooks';
import Search from './sections/Search/Search';
import { Card } from '../../components';

const Home = (): React.ReactElement => {
    const { data, fetchData } = useMedicine();

    React.useEffect(() => {
        fetchData(1);
    }, []);

    return (
        <>
            <Hero />
            <section className="container">
                <div className="flex-item-1">
                    <Search />
                    <div className="cards-container border">
                        {data.map((item: IMedicine, index: number) => (
                            <Card
                                name={item.name}
                                company={item.company}
                                publishDate={item.published_at}
                                key={String(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
