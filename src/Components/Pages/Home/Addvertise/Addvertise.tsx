import React from 'react';
import add1 from "../../../../Assets/add1.jpg";
import add2 from "../../../../Assets/add2.jpg";
import add3 from "../../../../Assets/add3.jpg";
const Addvertise = () => {
    return (
<div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-4 py-12 mt-8'>
<div className="card shadow-xl" data-aos="zoom-in">
  <figure><img src={add2} alt="Shoes" /></figure>
</div>
<div className="card shadow-xl" data-aos="zoom-in">
  <figure><img src={add1} alt="Shoes" /></figure>
</div>
<div className="card shadow-xl" data-aos="zoom-in">
  <figure><img src={add3} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default Addvertise;