import React from "react";
import add1 from "../../../../Assets/add1.jpg";
import add2 from "../../../../Assets/add2.jpg";
import add3 from "../../../../Assets/add3.jpg";
const Addvertise = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 py-14 bg-gray-100">
      <div className="mx-auto" data-aos="zoom-in">
        <figure>
          <img src='https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_41-1-1-1.jpg' alt="Shoes" />
        </figure>
      </div>
      <div className="mx-auto" data-aos="zoom-in">
        <figure>
          <img src='https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_21-1-1-1.jpg' alt="Shoes" />
        </figure>
      </div>
      <div className="mx-auto" data-aos="zoom-in">
        <figure>
          <img src='https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_31-1-1-1.png' alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Addvertise;
