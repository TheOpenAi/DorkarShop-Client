import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegHeart, FaExchangeAlt } from "react-icons/fa";
import useTitle from "../../../../hooks/useTitle";

const SingleCategories = () => {
  const products: any = useLoaderData();
  useTitle('Products');
  
  return (
    <div className="bg-gray-50 md:w-3/4 pt-5 mx-auto">
      <div className="text-xl breadcrumbs w-[90%] mx-auto text-secondary">
        <ul>
          <li><Link to={'/home'}> Home</Link></li>
          <li><Link to={''}> Category</Link></li>

        </ul>
      </div>
      <div className="w-[300px] h-[5px]  bg-secondary "></div>
      <hr />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 m-10 mt-16">
        {products.map((product: any) => (
          product?.paid ? null :
            <Link key={product._id} to={`/productsdetails/${product._id}`}>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="80"
              >
                <div
                  key={product._id}
                  className=" bg-base-100 cursor-pointer shadow-lg hover:scale-110 transition-transform hover:shadow-accent min-w-[250px] max-w-[300px] mx-auto"
                >
                  <div className="h-72">
                    <img
                      src={product.imgUrl}
                      alt=""
                      className="h-72 w-auto mx-auto  overflow-hidden"
                    />
                  </div>

                  <div className="h-60 bg-white">
                    <div className="w-full bg-gray-100 text-gray-400 px-5 items-center h-10 flex justify-between">
                      <p className="border-b border-gray-400">Fort Cane</p>
                      <p>Model 30</p>
                    </div>
                    <div className="px-5">
                      <div className="flex justify-between">
                        <h2 className="text-accent  text-2xl font-semibold py-2">
                          {product.model}
                        </h2>
                        <small className="text-accent font-semibold py-2">
                          {product.brand}
                        </small>
                      </div>
                      <h2 className="text-left text-gray-500 text-xl">
                        BDT {product.price} ৳
                      </h2>
                      <div className="flex justify-between items-center py-3">
                        <button className="btn btn-primary">See Details</button>
                        <div className="flex items-center text-accent ">
                          <div className="border-secondary p-1">
                            <FaRegHeart className="text-2xl mr-2" />
                          </div>

                          <div className="border-2 rounded-full border-secondary p-1">
                            <FaExchangeAlt className="text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 text-gray-400 px-5 items-center h-10 flex justify-between">
                      <div className="flex items-center justify-between">
                        <p className="">
                          <div className="rating">
                            <input
                              type="radio"
                              name="rating-4"
                              className="mask mask-star-2 bg-yellow-500"
                            />
                            <input
                              type="radio"
                              name="rating-4"
                              className="mask mask-star-2 bg-yellow-500"
                              checked
                            />
                            <input
                              type="radio"
                              name="rating-4"
                              className="mask mask-star-2 bg-yellow-500"
                            />
                            <input
                              type="radio"
                              name="rating-4"
                              className="mask mask-star-2 bg-yellow-500"
                            />
                            <input
                              type="radio"
                              name="rating-4"
                              className="mask mask-star-2 bg-yellow-500"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="border-2 rounded-full  mx-1"></div>
                        <p>Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleCategories;