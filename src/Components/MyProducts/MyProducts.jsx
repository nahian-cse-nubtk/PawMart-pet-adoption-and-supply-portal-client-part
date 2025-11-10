import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MyProducts = () => {
    const axios =useAxiosSecure();
    const {user} =useAuth();
    const  [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/categories?email=${user?.email}`)
        .then(data=>setProducts(data.data))
    },[axios, user?.email])

    const handleEditButton=(id)=>{
        

    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>


        <th>Basic Info</th>
        <th>Description</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products.map(product=><tr>

        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={product.image}
                  alt="Product Image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.name}</div>
              <div className="text-sm opacity-50">{product.location}</div>
            </div>
          </div>
        </td>
        <td>
          {product.description}

        </td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
            <div className='flex justify-center gap-3'>
                <button onClick={()=>handleEditButton(product._id)}><FaEdit size={25}/></button>
             <button><MdDelete size={25}/></button>
            </div>
            </td>

      </tr>)
      }



    </tbody>
    {/* foot */}

  </table>
</div>
    );
};

export default MyProducts;