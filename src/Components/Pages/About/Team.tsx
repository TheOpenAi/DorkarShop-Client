import React from 'react';
import "./team.css"
import arif from "../../../Assets/arif.jpg"
import siam from "../../../Assets/siam.jpg"

import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaPortrait, FaRegFileArchive, FaShare, FaTwitter, FaUsers } from 'react-icons/fa';
const Team = () => {


  const members = [
    {
      "id": 1,
      "name": "Anamika Goswami",
      "photo": "https://i.ibb.co/0nZ6C2c/Anaavatar-aesthetic-illustration-569774-79.webp",
      "developer": "Full Stack Developer",
      "facebook": "https://www.facebook.com/anamika.goswami.7798/",
      "portfolio": "https://anamika-goswami.netlify.app/",
      "github": "https://github.com/Anamika362890",
      "linkedin": "https://www.linkedin.com/in/anamika-goswami-02ba21242/",
      "email": "anamika362890@gmail.com"
    },
    {
      "id": 2,
      "name": "Sojib Das",
      "photo": "https://i.ibb.co/2gtNRpC/1671041849006-removebg-preview.png",
      "developer": "Full Stack Developer",
      "facebook": "https://www.facebook.com/sojibds.sojib",
      "portfolio": "https://cosmic-dango-971382.netlify.app/",
      "github": "https://github.com/sojib076",
      "linkedin": "https://www.linkedin.com/in/sojib-das-5aa5aa248/",
      "email": "sojibdas123@gmail.com"
    },
    {
      "id": 3,
      "name": "Thohidul Islam",
      "photo": "https://i.ibb.co/jvpdJRK/profile1-min-1.jpg",
      "developer": "Full Stack Developer",
      "facebook": "https://www.facebook.com/thohidulIslamcse",
      "portfolio": "https://thohidul-portfolio.netlify.app/",
      "github": "https://github.com/Towhid7890",
      "linkedin": "https://www.linkedin.com/in/thohidul-islam/",
      "email": "thohidcse7890@gmail.com"
    },
    {
      "id": 4,
      "name": "MD.Ikhtiaj Arif",
      "photo": arif,
      "developer": "Full Stack Developer",
      "facebook": "https://www.facebook.com/IkhtiajArif",
      "portfolio": "https://ikhtiaj-arif.web.app/",
      "github": "https://github.com/ikhtiaj-arif",
      "linkedin": "https://www.linkedin.com/in/ikhtiaj-arif/",
      "email": "md.ikhtiajarif@gmail.com"
    },
    {
      "id": 5,
      "name": "Abu Siam",
      "photo": siam,
      "developer": "Full Stack Developer",
      "facebook": "https://www.facebook.com/siamcse01",
      "portfolio": "https://siam-portfolio.netlify.app/",
      "github": "https://github.com/siamcse",
      "linkedin": "https://www.linkedin.com/in/abu-siam/",
      "email": "abusiam06@gmail.com"
    }
  ]

  return (
    <div className='mt-12'>
      <h2 className='text-xl font-bold text-indigo-500'>Our Creative Team</h2>
      <h4 className='text-3xl font-bold'>DorkerShop Team Member</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-12">


        {
          members.map((member, idx) => (





            <div key={idx}>
              <div className='team-container '>
                <img src={member.photo} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">

                    <button className='mx-3 grid grid-cols-3 gap-3'>
                      <a href={member.facebook}> <FaFacebook className='text-2xl'></FaFacebook></a>
                      <a href={member.linkedin}> <FaLinkedin className='text-2xl'></FaLinkedin></a>
                      <a href={member.github}> <FaGithub className='text-2xl'></FaGithub></a>
                      <a href={member.portfolio}> <FaPortrait className='text-2xl'></FaPortrait></a>
                      <a href={member.email}> <FaGoogle className='text-2xl'></FaGoogle></a>


                    </button>



                  </div>
                </div>

              </div>
              <h2 className="text-xl font-bold text-center mt-3">{member.name}</h2>
              <h4 className="font-bold mb-20 text-gray-600">{member.developer}</h4>
            </div>



          ))
        }







      </div>
    </div>
  );
};

export default Team;