import React from 'react';

const serviceData = [
    {
        title: " Tranter Jaskulski",
        details: "  100 years of combined experiea well-seasoned products you need.",
        imgSrc: "https://tdwpublishing.com/wp-content/uploads/2021/08/services-1.jpg"
    },
    {
        title: " Tranter Jaskulski",
        details: " With over 100 years oft a well-seasoned products you need.",
        imgSrc: "https://www.technologyhq.org/wp-content/uploads/2021/02/it-services.jpg"
    },
    {
        title: " Tranter Jaskulski",
        details: "combined experience, we've got a well-seasoned products you need.",
        imgSrc: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg"
    },
    {
        title: " Tranter Jaskulski",
        details: " With over 100 years of combined experience, we've got.",
        imgSrc: "https://www.technologyhq.org/wp-content/uploads/2021/02/it-services.jpg"
    },
    {
        title: " Tranter Jaskulski",
        details: " With over 100 years of combined experience, we've got.",
        imgSrc: "https://tdwpublishing.com/wp-content/uploads/2021/08/services-1.jpg"
    },
]

const Services = () => {
    return (
        <div>

            <div className="flex items-center justify-center h-auto bg-white py-24">
                <div className="flex flex-col">

                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">

                            <h1 className="text-gray-900 text-4xl font-bold mb-8">
                                Services We Provide
                            </h1>


                            <p className="text-gray-700 text-lg font-light">
                                With over 100 years of combined experience, we've got a well-seasoned products you need.
                            </p>
                        </div>
                    </div>


                    <div className="">
                        <div className="container">


                            {/* <!-- Team Members --> */}
                            <div className=" grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  px-4">


                                {
                                    serviceData.map((service, idx) => (<div
                                        className="w-full mb-6 px-6 sm:px-6 lg:px-4"
                                        key={idx}
                                    >
                                        <div className="flex flex-col">
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-2xl drop-shadow-md h-[220px] hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={service.imgSrc} alt="service" />
                                            </a>


                                            <div className="text-center mt-6">

                                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                                    {service.title}
                                                </h1>

                                                <div className="text-gray-700 font-light mb-2">
                                                    {service.details}
                                                </div>


                                            </div>
                                        </div>


                                    </div>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;