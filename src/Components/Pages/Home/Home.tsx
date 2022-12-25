import React, { useState } from 'react';

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