import React from 'react';

const CategoryCard = () => {
    return (
<div className="card w-80 bg-base-100 shadow-xl p-3">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body text-left">
    <div>
    <h2 className="card-title">
      Product Name
    </h2>
    <p>Price: </p>
    </div>
    <div className="card-actions flex justify-between">
      <div className="">
      <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input checked type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>    
    </div> 
      <div className="badge badge-outline">Details</div>
    </div>
  </div>
</div>
 );
};

export default CategoryCard;