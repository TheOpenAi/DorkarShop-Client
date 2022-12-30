import React from "react";
import support from "../../../Assets/support.webp";
import support1 from "../../../Assets/support1.jpg";
import support2 from "../../../Assets/SUPPORT2.webp";
import con1 from "../../../Assets/contact.png";
import { toast } from "react-hot-toast";
const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    toast.success("Email send successfully");
  };
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-indigo-500">
        CONTACT US
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 px-4 md:px-12">
        <div className="card bg-base-100 shadow-xl border-b-8 border-indigo-500">
          <div className="flex justify-center">
            <img className="w-1/2" src={support2} alt="" />
          </div>
          <div className="card-body items-center text-center mt-0 pt-0">
            <h2 className="font-bold text-indigo-500 text-2xl">WE ARE HERE</h2>
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
        <div className="card bg-base-100 shadow-xl border-b-8 border-indigo-500">
          <div className="flex justify-center">
            <img className="w-1/2" src={support} alt="" />
          </div>
          <div className="card-body items-center text-center mt-0 pt-0">
            <h2 className="font-bold text-indigo-500 text-2xl">
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
        <div className="card bg-base-100 shadow-xl border-b-8 border-indigo-500">
          <div className="flex justify-center">
            <img className="w-1/2" src={support1} alt="" />
          </div>
          <div className="card-body items-center text-center mt-0 pt-0">
            <h2 className="font-bold text-indigo-500 text-2xl">
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
      <div className=" bg-base-200 py-12">
        <h2 className="text-3xl font-bold text-center text-indigo-500 py-5">
          DROP US A LINE
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 px-4 md:px-28 mt-14">
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
    </div>
  );
};

export default Contact;
