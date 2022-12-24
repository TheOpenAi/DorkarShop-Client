import React from 'react';
import Banner from './Banner/Banner';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Review from './Reviews/Review';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
         <FeaturedProducts/>
            {/* categoried */}
            <Services/>
            <Review/>
            {/*  Branches*/}
            {/*  Testimonials */}
            {/*  Team member */}
        </div>
    );
};

export default Home;