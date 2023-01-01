import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Products = () => {
  const [product, setProduct] = useState(10);
  Aos.init();
  //    use react trant query to fetch data from the server
  const { data = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://dorkar-shop-server-siamcse.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });



  if (isLoading) {
    return <Loading />
  }
  return (

    <>
      <div>
        <div className="flex items-center justify-center h-auto bg-gray-100 pt-20">
          <div className="flex flex-col">

            <div className="flex flex-wrap justify-center text-center mb-10">
              <div className="w-full lg:w-6/12 px-4">

                <h1 className="text-accent text-4xl font-bold mb-8">

                  Our Top <span className='text-secondary'>Products</span>
                </h1>

              </div>
            </div>
            <div className="w-full  mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 px-4">
                {data.slice(0, product).map((product: any) => (
                  product?.paid ? null :
                    <Link to={`/productsdetails/${product._id}`}>
                      <div
                        data-aos="fade-up"
                        className="w-[100%] h-[90%] mx-auto"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                      >
                        <div
                          key={product._id}
                          className="w-[100%] h-36  bg-base-100 cursor-pointer shadow-lg rounded hover:scale-110 transition duration-700 hover:shadow-accent flex  items-center p-2"
                        >
                          <img
                            src={product.imgUrl}
                            alt=""
                            className="w-[45%] h-[70%]"
                          />
                          <div className="mx-3 flex flex-col justify-center items-center ">
                            <h2 className="font-bold text-lg mt-2">
                              {product?.model}
                            </h2>
                            <h2 className="mt-2">Price: {product?.price} ৳ </h2>
                            <p className="py-2">Brand: {product?.brand}</p>

                          </div>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center text-center ">
              <div className="w-full lg:w-6/12 px-4">
                <h1
                  onClick={() => setProduct(product + 10)}
                  className="text-gray-900 text-xl mt-10 cursor-pointer font-bold mb-8"
                >
                  Load More..
                </h1>
              </div>
            </div>

          </div>
        </div>
      </div>






    </>
  );
};

export default Products;