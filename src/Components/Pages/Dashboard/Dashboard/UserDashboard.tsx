import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import UserProvider, { UserContext } from '../../../../context/UserProvider';

const UserDashboard = () => {
    const user = useContext(UserContext)
    return (
        <div className='w-[70%] mx-auto '>



            <section className="py-10  sm:py-16 lg:py-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-left sm:text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-xl">Welcome To Dashboard  {user?.user?.name}</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" >

                            {
                                user?.user?.role === 'Seller' && <>
                                    <h1 className='text-2xl text-primary'>

                                        Dear Seller you can add your product from add Product and see your product from my product
                                    </h1>
                                </>

                            }
                            {
                                user?.user?.role === 'Buyer' && <>
                                    <h1 className='text-2xl text-primary'>
                                        Dear Buyer Thanks for being with us. You can see your order from my order
                                    </h1>
                                </>
                            }

                        </p >
                    </div >

                    <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20" >
                        <div className="flex items-start" >
                            <svg className="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg >
                            <div className="ml-4" >
                                <h3 className="text-xl font-semibold text-black" > 130 + Sellers</h3 >
                                <p className="mt-1.5 text-base text-gray-600" > Ready to Sell Product</p >
                            </div >
                        </div >

                        <div className="flex items-start" >
                            <svg className="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg >
                            <div className="ml-4" >
                                <h3 className="text-xl font-semibold text-black" > 130 + Buyers</h3 >
                                <p className="mt-1.5 text-base text-gray-600" > Can Buy Any Product</p >
                            </div >
                        </div >

                        <div className="flex items-start" >
                            <svg className="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg >
                            <div className="ml-4" >
                                <h3 className="text-xl font-semibold text-black" > Easy Access</h3 >
                                <p className="mt-1.5 text-base text-gray-600" > Anyone can use</p >
                            </div >
                        </div >
                    </div >



                    <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0" >
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg >
                        <span className="ml-2 text-sm text-gray-600" > Your data is complely secured with us.We don’t share with anyone. </span >
                    </div >

                </div >

            </section >


            {/* The button to open modal */}







        </div >
    );
};

export default UserDashboard;