import React from "react";
import support from "../../../Assets/support.webp";
import support1 from "../../../Assets/support1.jpg";
import support2 from "../../../Assets/SUPPORT2.webp";
import con1 from "../../../Assets/contact.png";
import { toast } from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    toast.success("Email send successfully");
  };
  useTitle('Contact');
  return (
    <div className="py-12 w-full">
      <h2 className="text-3xl font-bold text-center text-primary">
        CONTACT US
      </h2>
      <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 px-4 md:px-12">
        <div className="card bg-gray-100 shadow-xl border-b-8 border-primary max-w-lg mx-auto">
          <div className="flex justify-center ">
            <img className="w-1/2" src={support2} alt="" />
          </div>
          <div className="card-body items-center text-center mt-0 pt-0">
            <h2 className="font-bold text-primary text-2xl">WE ARE HERE</h2>
            <p>Phone: +88018377373</p>
            <p>Email: dorkerShop@gmail.com</p>
            <p></p>
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                Get Support
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-gray-100 shadow-xl border-b-8 border-primary max-w-lg mx-auto">
          <div className="flex justify-center">
            <img className="w-1/2" src={support} alt="" />
          </div>
          <div className="card-body items-center text-center mt-0 pt-0">
            <h2 className="font-bold text-primary text-2xl">
              Contact Support
            </h2>
            <p>
              Our team is spread across the <br /> world to give you answer
              fast.
            </p>
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                Get Support
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-gray-100 shadow-xl border-b-8 border-primary max-w-lg mx-auto">
          <div className="flex justify-center">
            <img className="w-1/2" src={support1} alt="" />
          </div>
          <div className="card-body items-center text-center mt-0 pt-0">
            <h2 className="font-bold text-primary text-2xl">
              Contact Sales
            </h2>
            <p>
              Get in touch with our sales team to see
              <br /> how we can work together.
            </p>
            <div className="card-actions">
              <button className="btn btn-outline btn-primary">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 py-12 mt-20">
        <h2 className="text-3xl font-bold text-center text-primary py-5">
          DROP US A LINE
        </h2>
        <div className="lg:w-3/4 mx-auto grid grid-col-1 md:grid-cols-2 px-4 mt-14">
          <div className="flex justify-center" data-aos="zoom-in">
            <img src={con1} alt="" />
          </div>
          <div className=" border rounded-xl">
            <form onSubmit={sendEmail}>
              <div className="card  w-full shadow-2xl">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="input bg-white text-black input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="input bg-white text-black input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      required
                      placeholder="Write Your Message"
                      className="textarea bg-white text-black input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline bg-gradient-to-r from-primary to-secondary  text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
