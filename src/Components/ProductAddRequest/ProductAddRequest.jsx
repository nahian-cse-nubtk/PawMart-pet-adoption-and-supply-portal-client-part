import React from 'react';
import { Link } from 'react-router';

const ProductAddRequest = () => {
    return (
        <div >
 <div className=" mx-auto my-20 card w-96 bg-linear-to-r from-amber-500 to-orange-600 dark:bg-linear-to-r dark:from-black dark:to-gray-700 text-gray-100 card-xs shadow-sm">
  <div className="card-body">
    <p className='text-xl font-bold'>Please Add Product to See your Product List</p>
    <div className="justify-end card-actions">
      <Link to='/add-listing'><button className="btn bg-amber-100 dark:bg-gray-400">Add Product</button></Link>
    </div>
  </div>
</div>
</div>
    );
};

export default ProductAddRequest;