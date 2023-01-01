import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Products = () => {
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
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-center h-auto bg-gray-100 pt-20">
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center text-center mb-10">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-accent text-4xl font-bold mb-4">
                Our Top <span className="text-secondary"> Products</span>
              </h1>
            </div>
          </div>

          <div className="">
            <div className="container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5  px-4">
                {data.map((product: any) => (
                  product?.paid ? null :
                    <Link to={`/productsdetails/${product._id}`}>
                      <div
                        data-aos="fade-up"
                        className="w-[100%] h-[90%] mx-auto"
                        data-aos-duration="1000"
                        data-aos-delay="80"
                      >
                        <div
                          key={product._id}
                          className="w-[100%] h-36  bg-base-100 cursor-pointer shadow-lg rounded hover:scale-110 transition-transform hover:shadow-accent flex  "
                        >
                          <img
                            src={product.imgUrl}
                            alt=""
                            className="w-[45%] h-[100%]"
                          />
                          <div className="mx-3 flex flex-col justify-center items-center ">
                            <h2 className="font-bold text-lg mt-2">
                              {product?.model}
                            </h2>
                            <h2 className="mt-2">{product?.price} BDT</h2>
                            <small className="py-2">Brand:{product?.brand}</small>
                            <div className="flex items-center mb-4">
                              <div className="flex gap-1 text-sm text-yellow-400">
                                <span>
                                  <i>
                                    <FaStar></FaStar>
                                  </i>
                                </span>
                                <span>
                                  <i>
                                    <FaStar></FaStar>
                                  </i>
                                </span>
                                <span>
                                  <i>
                                    <FaStar></FaStar>
                                  </i>
                                </span>
                                <span>
                                  <i>
                                    <FaStar></FaStar>
                                  </i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center text-center ">
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