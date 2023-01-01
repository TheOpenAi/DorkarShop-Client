import React from 'react';
import cartPic from "../../../Assets/About-1.jpg";
import Footer from '../Footer/Footer';

import ClientSay from './ClientSay';
import NewsLetter from './NewsLetter';
import Team from './Team';
import Wedo from './Wedo';

const About = () => {
  return (
    <div>
      <div className='px-12 py-12 bg-white'>

        <h2 className='text-3xl font-bold'>About Us</h2>
        <div className="hero mt-12">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <div className="text-left pl-8">
              <h1 className="text-xl md:text-4xl font-bold">Creative and renovate fashion <br /> trends</h1>
              <p className="py-6">Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
              <div className="flex justify-between hidden md:flex">

                <div className='mr-2'>
                  <div className="text-lg md:text-2xl font-bold">2 years</div>
                  <div className="font-bold">Experience</div>
                </div>

                <div className='mr-2'>
                  <div className="text-lg md:text-2xl font-bold">2k</div>
                  <div className="font-bold">Happy Customers</div>
                </div>

                <div className=''>
                  <div className="text-lg md:text-2xl font-bold">100%</div>
                  <div className="font-bold">Client Satisfaction</div>
                </div>

              </div>
            </div>
            <div data-aos="fade-right" className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100 ">
              <img src={cartPic} alt="" />
            </div>
          </div>

        </div>
        <Wedo></Wedo>
        <Team></Team>
      </div>
      <NewsLetter></NewsLetter>
      <ClientSay></ClientSay>
      <Footer></Footer>
    </div>
  );
};

export default About;