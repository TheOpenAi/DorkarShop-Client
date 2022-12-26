import Aos from 'aos';
import React from 'react';

const Products = () => {

    Aos.init();
    const products = [
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lDmUkhu7XDdGww_AsQub6jJ55I7WMgAoYrqdopFa-tI="
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://www.bisleri.com/images/banner-03-product(2).png"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://thumbs.dreamstime.com/z/moscow-russia-april-fujifilm-t-moscow-russia-april-fujifilm-t-camera-lens-carl-zeiss-fringer-ef-fx-pro-ii-adapter-215847157.jpg"
        }, {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lDmUkhu7XDdGww_AsQub6jJ55I7WMgAoYrqdopFa-tI="
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://www.bisleri.com/images/banner-03-product(2).png"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://petapixel.com/assets/uploads/2017/03/product1.jpeg"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            title: " Tranter Jaskulski",
            details: " With over 100 years of combined experience, we've got.",
            imgSrc: "https://thumbs.dreamstime.com/z/moscow-russia-april-fujifilm-t-moscow-russia-april-fujifilm-t-camera-lens-carl-zeiss-fringer-ef-fx-pro-ii-adapter-215847157.jpg"
        },
    ]
    return (

        <div>
            <div className="flex items-center justify-center h-auto bg-white pt-16">
                <div className="flex flex-col">

                    <div className="flex flex-wrap justify-center text-center mb-20">
                        <div className="w-full lg:w-6/12 px-4">

                            <h1 className="text-gray-900 text-4xl font-bold mb-8">

                                Our Top <span className='text-secondary'> Products</span>
                            </h1>

                        </div>
                    </div>


                    <div className="">
                        <div className="container">


                            <div className=" grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10  px-4"

                            >


                                {
                                    products.map((product, idx) => (

                                        <div    data-aos='fade-up'
                                        data-aos-duration='1000'
                                        data-aos-delay='80'>
                                            <div key={idx} className="card w-[90%] h-[100%] bg-base-100 cursor-pointer shadow-lg hover:scale-110 transition-transform hover:shadow-secondary " >
                                                <div className="card-body text-center">
                                                    <h2 className="card-title py-2">{product.title}</h2>
                                                    <img src={product.imgSrc} alt=""  />
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">

                            <h1 className="text-gray-900 text-xl mt-10 cursor-pointer font-bold mb-8">

                                See All..
                            </h1>



                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Products;