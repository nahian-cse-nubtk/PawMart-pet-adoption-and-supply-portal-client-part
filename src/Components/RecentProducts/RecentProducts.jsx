import React, { useEffect, useState } from 'react';
import Catagory from '../Catagory/Catagory';
import useAxios from '../../Hooks/useAxios';

const RecentProducts = () => {
    const axios =useAxios();
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('/categories/recentProdcut')
        .then(data=>setProducts(data.data))
    },[axios])
    return (
        <div className='p-5'>
            <h1 className='text-center font-bold my-10 text-4xl'>Recent Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    products.map(product=><Catagory key={product._id} product={product}></Catagory>)
                }
            </div>

        </div>
    );
};

export default RecentProducts;