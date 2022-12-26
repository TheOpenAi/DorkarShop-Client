import React from 'react';

import Banner from './Banner/Banner';

import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Review from './Reviews/Review';
import Services from './Services/Services';
import Categories from './Categories/Categories';

import Products from './Top Products/Products';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../Footer/Footer';



const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Products></Products>
            <FeaturedProducts/>
            <Services />
            <Review />
            <Testimonials></Testimonials>
            <Team></Team>
            <Footer></Footer>
 
        </div >
    );
};

export default Home;