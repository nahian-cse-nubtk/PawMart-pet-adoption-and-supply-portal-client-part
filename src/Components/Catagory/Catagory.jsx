import React from "react";

const Catagory = ({product}) => {

  return (
    <div className="card bg-amber-100 shadow-sm">
      <figure>
        <img className="w-full h-90 p-3"
          src={product.image}
          alt="product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>
        {product.description}
        </p>
        <p><span className="font-bold">Category:</span> {product.category}</p>
        <p><span className="font-bold">Location:</span> {product.location}</p>
        <p><span className="font-bold">Price:</span> ${product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-amber-50 hover:bg-amber-200">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
