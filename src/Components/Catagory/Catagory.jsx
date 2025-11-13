import React from "react";
import { Link } from "react-router";

const Catagory = ({product}) => {

  return (
    <div className="card bg-amber-100 dark:bg-gray-700 shadow-sm">
      <figure>
        <img className="w-full h-90 p-3"
          src={product.image}
          alt="product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        
        <p><span className="font-bold">Category:</span> {product.category}</p>
        <p><span className="font-bold">Location:</span> {product.location}</p>
        <p><span className="font-bold">Price:</span> ${product.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${product._id}`}><button className="btn bg-amber-50 dark:bg-gray-400 hover:bg-amber-200 dark:hover:bg-gray-300">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
