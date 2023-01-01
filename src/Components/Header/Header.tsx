import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import aos
import Aos from "aos";

import Cart from "../Pages/Cart/Cart";
import { UserContext } from "../../context/UserProvider";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const user = useContext(UserContext);
  const [cartProducts, setProducts] = useState<any[]>([]);
  console.log(user?.user);
  Aos.init();

  const handleLogout = () => {
    user?.setUser(null);
    localStorage.removeItem("loggedUser");
  };
  console.log(user?.refresh);

  useEffect(() => {
    if (user?.user?.email) {
      fetch(`https://dorkar-shop-server-siamcse.vercel.app/carts?email=${user?.user?.email}`)
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        })
    }

  }, [user?.user?.email,user?.refresh]);

  return (
    <>
      <div className="font-sans print:hidden">
        <div className="navbar bg-gray-100 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="navbar-start">
            <div className="dropdown"></div>
            <a className="btn btn-ghost normal-case text-xl">
              <h1 className="text-xl md:text-3xl lg:text-3xl text-primary font-sans font-extrabold lg:ml-10">
                Dorkar Shop
              </h1>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <form>
              <div className="relative rounded-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-[#F3F4F6]">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" bg-[#F3F4F6] block w-full p-4 pl-10 text-sm text-gray-900  "
                  placeholder="Search "
                  required
                ></input>
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5
                                 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="navbar-end">
            <div className="flex gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="font-sans print:hidden ">
        {/* <!-- lg+ --> */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center font-sans justify-between h-16 lg:h-20">
              <ul className="hidden lg:flex lg:items-center lg:space-x-10 text-xl">
                <li>
                  <Link to={"/home"}> Home</Link>
                </li>
                <li>
                  <Link to={"/about"}> About</Link>
                </li>
                <li>
                  <Link to={"/contact"}> Contract </Link>
                </li>

                {user?.user?.email ? (
                  <>
                    <li>
                      <button onClick={handleLogout}> LogOut</button>
                    </li>
                    <li>
                      <Link to={"/dashboard"}> Dashboard</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/login"}> Login</Link>
                    </li>
                    <li>
                      <Link to={"/singup"}> Singup</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard"}> {user?.user?.name}</Link>
                    </li>
                  </>
                )}
              </ul>

              <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                <div className=" flex flex-shrink-0 ">
                  <div>
                    {/* <h1 className="text-xl md:text-3xl lg:text-3xl text-primary font-sans font-extrabold lg:ml-10">
                      Dorkar Shop
                    </h1> */}
                  </div>

                  <div>
                    <label
                      htmlFor="dashboard-drawer-2"
                      tabIndex={2}
                      className="mr-10 lg:hidden"
                    >
                      <img
                        className="mr-6 "
                        src="https://i.ibb.co/0FQ1X8x/icons8-dashboard-layout-48.png"
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="indicator lg:hidden">
                <span className="indicator-item badge badge-error">{cartProducts?.length}</span>
                <button
                  type="button"
                  className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:space-x-10  ">
                {/* <form>
                  <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none bg-[#F3F4F6]">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                   
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5
                                 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 "
                    >
                      Search
                    </button>
                  </div>
                </form> */}

                <div className="indicator">
                  <span className="indicator-item badge badge-error">{cartProducts?.length}</span>
                  <Link
                    to={"#"}
                    title=""
                    className="flex items-center justify-center w-10 h-10 text-white bg-gray-500 rounded-full"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </Link>
                </div>
                {user?.user?.email && (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- xs to lg --> */}
        {navbarOpen && (
          <nav
            className="py-4 bg-white lg:hidden"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Menu
                </p>

                <button
                  type="button"
                  className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6">
                <ul className="flex flex-col space-y-2 text-xl">
                  <li>
                    <Link to={"/home"}> Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}> About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}> Contact</Link>
                  </li>
                  {user?.user?.email ? (
                    <>
                      <li>
                        <button onClick={handleLogout}> LogOut</button>
                      </li>

                      <li>
                        <Link to={"/dashboard"}> Dashboard</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to={"/login"}> Login</Link>
                      </li>
                      <li>
                        <Link to={"/singup"}> Singup</Link>
                      </li>{" "}
                    </>
                  )}
                </ul>

                <hr className="my-4 border-gray-200" />

                <div className="flex flex-col space-y-2">
                  <form>
                    <div className="relative rounded-lg">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-[#F3F4F6]">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 "
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className=" bg-[#F3F4F6] block w-full p-4 pl-10 text-sm text-gray-900  "
                        placeholder="Search Prodcuts, "
                        required
                      ></input>
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5
                                 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 "
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        )}

        {
          // isOpen ? <Cart isOpen={isOpen} setIsOpen={setIsOpen}></Cart> : null
        }
        {isOpen ? <Cart isOpen={isOpen} setIsOpen={setIsOpen}></Cart> : null}
      </header>
    </>
  );
};

export default Header;
