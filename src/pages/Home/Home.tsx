/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Hero from './sections/Hero/Hero';
import { IMedicine } from '../../@types/medicine';
import { useMedicine } from '../../hooks';
import Search from './sections/Search/Search';
import { Card, Pagination } from '../../components';

const Home = (): React.ReactElement => {
    const { data, fetchData, pages, handlePageChange } = useMedicine();

    React.useEffect(() => {
        fetchData(1);
    }, []);

    return (
        <>
            <Hero />
            <section className="container">
                <div className="flex-item-1 w-100">
                    <Search />
                    <div className="cards-container mt-4">
                        {data.map((item: IMedicine, index: number) => (
                            <Card
                                name={item.name}
                                company={item.company}
                                publishDate={item.published_at}
                                key={String(index)}
                            />
                        ))}
                    </div>

                    <Pagination
                        first={pages.first}
                        prev={pages.prev}
                        next={pages.next}
                        last={pages.last}
                        pages={pages.pages}
                        items={pages.items}
                        onPageChange={handlePageChange}
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
