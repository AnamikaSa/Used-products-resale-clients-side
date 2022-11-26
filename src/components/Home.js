import React from 'react';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='font-bold text-5xl mb-10 font-sans'>Categories</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;