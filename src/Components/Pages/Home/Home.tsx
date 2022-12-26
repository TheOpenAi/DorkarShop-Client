import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Products from './Top Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Feautere  Products  */}
            <Categories></Categories>
            <Products></Products>
            {/* services  */}
            {/*  Branches*/}
            {/*  Testimonials */}
            {/*  Team member */}
        </div>
    );
};

export default Home;