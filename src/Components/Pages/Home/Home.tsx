import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Banner from './Banner/Banner';

import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Review from './Reviews/Review';
import Services from './Services/Services';
import Categories from './Categories/Categories';
import Team from './Team/Team';


const Home = () => {


    return (
        <div>
            <Banner></Banner>


            <FeaturedProducts />

            <Services />
            <Review />


            <Categories></Categories>
    {/* services  */ }

    {/*  Branches*/ }
    {/*  Testimonials */ }
    
            <Categories></Categories>
            <Team></Team>
        </div >
    );
};

export default Home;