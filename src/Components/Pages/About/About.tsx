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
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-left pl-8">
      <h1 className="text-4xl font-bold">Creative and renovate fashion <br /> trends</h1>
      <p className="py-6">Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
      <div className="grid grid-cols-3 gap-2">
  
  <div className="stat">
    <div className="stat-value">2 years</div>
    <div className="stat-desc text-xl font-bold">Experience</div>
  </div>
  
  <div className="stat">
    <div className="stat-value">2k</div>
    <div className="stat-desc text-xl font-bold">Happy Customers</div>
  </div>
  
  <div className="stat">
    <div className="stat-value">100%</div>
    <div className="stat-desc text-2xl font-bold">Client Satisfaction</div>
  </div>
  
</div>
    </div>
    <div data-aos="fade-right" className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100 ">
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