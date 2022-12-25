import React from 'react';
import Banner from './Banner/Banner';

import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Review from './Reviews/Review';
import Services from './Services/Services';
import Categories from './Categories/Categories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>


            <FeaturedProducts />

            <Services />
            <Review />


            <Categories></Categories>
            {/* services  */}

            {/*  Branches*/}
            {/*  Testimonials */}
            {/*  Team member */}
        </div>
    );
};

export default Home;