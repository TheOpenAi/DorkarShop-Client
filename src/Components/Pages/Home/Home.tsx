import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Team from './Team/Team';

const Home = () => {
  

    return (
        <div>
            <Banner></Banner>
            {/* Feautere  Products  */}
            {/* categoried */}
            {/* services  */}
            {/*  Branches*/}
            {/*  Testimonials */}
    
            <Categories></Categories>
            <Team></Team>
        </div>
    );
};

export default Home;