import React from 'react';
import failed from "../../Assets/animation_500_lcc0048a.gif"
import Footer from '../Pages/Footer/Footer';

const PaymentFail = () => {
    return (
        <div>

            <div>



                <div className=" ">


                    <div className="bg-white p-6   md:mx-auto">

                        <iframe className='mx-auto' src="https://embed.lottiefiles.com/animation/19230" />

                        <div className="text-center">


                            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Oh,No,Your Payment Failed!</h3>
                            <p className="text-gray-600 my-2">A problem has  occurred on your order.</p>
                            <p> Please try again!  </p>
                            <div className="py-10 text-center">


                                <a href="/" className=" text-white font-semibold py-3 px-6 text-center rounded-xl transition bg-gradient-to-r from-primary to-secondary  focus:secondary print:hidden ">
                                    GO BACK TO HOME
                                </a>


                            </div>



                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <div>





                </div>


                <Footer></Footer>
            </div>


        </div>
    );
};

export default PaymentFail;