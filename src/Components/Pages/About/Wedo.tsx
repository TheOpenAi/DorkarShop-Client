import React from 'react';
import work from "../../../Assets/work.svg"
import buy from "../../../Assets/buy.svg"
import user from "../../../Assets/user.svg"
const Wedo = () => {
return (
<div className='py-6'>
    <h2 className='text-xl font-bold text-emerald-600'>What We Do</h2>
    <h4 className='text-3xl font-bold'>We Are Trusted By Clients</h4>
<div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-6">
<div className="card text-left bg-base-100 shadow-xl">
  <div className='pl-8'><img src={work} className="w-16" alt="Shoes" /></div>
  <div className="card-body">
    <h2 className="card-title text-3xl text-emerald-600">Business Year</h2>
    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular.</p>
  </div>
</div>
<div className="card text-left bg-base-100 shadow-xl">
  <div className="pl-8"><img src={buy} className="w-16" alt="Shoes" /></div>
  <div className="card-body">
    <h2 className="card-title text-3xl text-emerald-600">Product Sales</h2>
    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular.</p>
  </div>
</div>
<div className="card text-left bg-base-100 shadow-xl">
  <div className="pl-8"><img src={user} className="w-16" alt="Shoes" /></div>
  <div className="card-body">
    <h2 className="card-title text-3xl text-emerald-600">Happy Customers</h2>
    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular.</p>
  </div>
</div>
 </div>
</div>
    );
};

export default Wedo;