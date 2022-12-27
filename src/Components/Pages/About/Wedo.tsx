import React from 'react';
import "./wedo.css"
import { FaBusinessTime, FaCartPlus, FaUsers } from 'react-icons/fa';
const Wedo = () => {
return (
<div className='py-6 mt-12'>
    <h2 className='text-xl font-bold text-indigo-500'>What We Do</h2>
    <h4 className='text-3xl font-bold'>We Are Trusted By Clients</h4>
<div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-6 py-12">
<div className="card text-left bg-base-100" data-aos="zoom-in">
  <div className='pl-8'><FaBusinessTime className='text-5xl mt-3'></FaBusinessTime></div>
  <div className="card-body">
    <h2 className="card-title text-3xl text-indigo-500">Business Year</h2>
    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular.</p>
  </div>
</div>
<div className="card text-left bg-base-100" data-aos="zoom-in">
  <div className="pl-8"><FaCartPlus className='text-5xl mt-3'></FaCartPlus></div>
  <div className="card-body">
    <h2 className="card-title text-3xl text-indigo-500">Product Sales</h2>
    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular.</p>
  </div>
</div>
<div className="card text-left bg-base-100" data-aos="zoom-in">
  <div className="pl-8"><FaUsers className='text-5xl mt-3'></FaUsers></div>
  <div className="card-body">
    <h2 className="card-title text-3xl text-indigo-500">Happy Customers</h2>
    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular.</p>
  </div>
</div>
 </div>
</div>
    );
};

export default Wedo;