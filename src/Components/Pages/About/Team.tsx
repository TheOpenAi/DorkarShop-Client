import React from 'react';
import "./team.css"
import team1 from "../../../Assets/team1.png"
import team2 from "../../../Assets/team2.png"
import team3 from "../../../Assets/team3.png"
import team4 from "../../../Assets/team4.png"
import team5 from "../../../Assets/team5.png"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Team = () => {
    return (
<div className='mt-12'>
<h2 className='text-xl font-bold text-indigo-500'>Our Creative Team</h2>
    <h4 className='text-3xl font-bold'>DorkerShop Team Member</h4>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-12">
<div>
<div className='team-container'>
  <img src={team1} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">
        <button>
       <a href=""> <FaFacebook className='text-2xl'></FaFacebook></a>
        </button>
        <button className='mx-3'>
       <a href=""> <FaTwitter className='text-2xl'></FaTwitter></a>
        </button>
        <button>
       <a href=""> <FaLinkedin className='text-2xl'></FaLinkedin></a>
        </button>
    </div>
  </div>
  
</div>
<h2 className="text-xl font-bold text-center mt-3">Tony Williamson</h2>
<h4 className="font-bold text-gray-600">FOUNDER</h4>
</div>
<div>
<div className='team-container'>
  <img src={team2} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">
        <button>
       <a href=""> <FaFacebook className='text-2xl'></FaFacebook></a>
        </button>
        <button className='mx-3'>
       <a href=""> <FaTwitter className='text-2xl'></FaTwitter></a>
        </button>
        <button>
       <a href=""> <FaLinkedin className='text-2xl'></FaLinkedin></a>
        </button>
    </div>
  </div>
  
</div>
<h2 className="text-xl font-bold text-center mt-3">William Hanah</h2>
<h4 className="font-bold text-gray-600">CEO</h4>
</div>
<div>
<div className='team-container'>
  <img src={team3} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">
        <button>
       <a href=""> <FaFacebook className='text-2xl'></FaFacebook></a>
        </button>
        <button className='mx-3'>
       <a href=""> <FaTwitter className='text-2xl'></FaTwitter></a>
        </button>
        <button>
       <a href=""> <FaLinkedin className='text-2xl'></FaLinkedin></a>
        </button>
    </div>
  </div>
  
</div>
<h2 className="text-xl font-bold text-center mt-3">JInglo Jelian</h2>
<h4 className="font-bold text-gray-600">Marketing</h4>
</div>
<div>
<div className='team-container'>
  <img src={team4} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">
        <button>
       <a href=""> <FaFacebook className='text-2xl'></FaFacebook></a>
        </button>
        <button className='mx-3'>
       <a href=""> <FaTwitter className='text-2xl'></FaTwitter></a>
        </button>
        <button>
       <a href=""> <FaLinkedin className='text-2xl'></FaLinkedin></a>
        </button>
    </div>
  </div>
  
</div>
<h2 className="text-xl font-bold text-center mt-3">Tony Williamson</h2>
<h4 className="font-bold text-gray-600">FOUNDER</h4>
</div>
<div>
<div className='team-container'>
  <img src={team5} alt="Avatar" className="image" />
  <div className="overlay">
    <div className="text">
        <button>
       <a href=""> <FaFacebook className='text-2xl'></FaFacebook></a>
        </button>
        <button className='mx-3'>
       <a href=""> <FaTwitter className='text-2xl'></FaTwitter></a>
        </button>
        <button>
       <a href=""> <FaLinkedin className='text-2xl'></FaLinkedin></a>
        </button>
    </div>
  </div>
  
</div>
<h2 className="text-xl font-bold text-center mt-3">Tony Williamson</h2>
<h4 className="font-bold text-gray-600">Advisor</h4>
</div>
</div>
</div>
    );
};

export default Team;