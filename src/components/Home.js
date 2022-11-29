import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Blog from './Blog';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='font-bold text-4xl mb-10 font-sans'>Categories</h1>
            <Categories></Categories>
            <h1 className='font-bold text-4xl mb-14 mt-10 font-sans'>Advertise Products...</h1>
            <Advertise></Advertise>
            <h1 className='font-bold text-4xl mb-10 mt-10 font-sans'>FQA...</h1>
            <Blog></Blog>
        </div>
    );
};

export default Home;