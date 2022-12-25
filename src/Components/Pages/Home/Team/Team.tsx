import React from 'react';
import './Team.css'
import AOS from 'aos';
const Team = ( ) => {
    AOS.init();

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" data-aos='fade-right 
            '  data-aos-duration="500"> 
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet the Dev Team </h2>
                    <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Meet the hardworking team behind the scenes of this project.
                </p>
                </div>

                <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-16 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0 ">
                    <div className='card-hover'>
                        <img className="object-cover mx-auto rounded-lg w-28 h-28" src="https://i.ibb.co/2gtNRpC/1671041849006-removebg-preview.png" alt="" />

                        <p className=" text-lg font-semibold leading-tight text-black ">Jenny Wilson</p>
                        <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
                    </div>

                    <div className="hidden lg:block"></div>
                    <div className='card-hover'>
                        <img className="object-cover mx-auto rounded-lg w-28 h-28" src="https://i.ibb.co/2gtNRpC/1671041849006-removebg-preview.png" alt="" />

                        <p className=" text-lg font-semibold leading-tight text-black ">Jenny Wilson</p>
                        <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
                    </div>

                    <div className="hidden lg:block"></div>
                    <div className='card-hover'>
                        <img className="object-cover mx-auto rounded-lg w-28 h-28" src="https://i.ibb.co/2gtNRpC/1671041849006-removebg-preview.png" alt="" />

                        <p className=" text-lg font-semibold leading-tight text-black ">Jenny Wilson</p>
                        <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
                    </div>

                    <div className="hidden lg:block"></div>
                    <div className='card-hover'>
                        <img className="object-cover mx-auto rounded-lg w-28 h-28" src="https://i.ibb.co/2gtNRpC/1671041849006-removebg-preview.png" alt="" />

                        <p className=" text-lg font-semibold leading-tight text-black ">Jenny Wilson</p>
                        <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
                    </div>

                    <div className="hidden lg:block"></div>
                    <div className='card-hover'>
                        <img className="object-cover mx-auto rounded-lg w-28 h-28" src="https://i.ibb.co/2gtNRpC/1671041849006-removebg-preview.png" alt="" />

                        <p className=" text-lg font-semibold leading-tight text-black ">Jenny Wilson</p>
                        <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
                    </div>

                 
                </div>
            </div>
        </section>

    );
};

export default Team;