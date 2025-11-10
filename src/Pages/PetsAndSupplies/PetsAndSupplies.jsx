import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Catagory from '../../Components/Catagory/Catagory';

const PetsAndSupplies = () => {
    const [products,setProducts] =useState([])
    const axios = useAxios();
    useEffect(()=>{
        axios.get('/categories')
        .then(data=>setProducts(data.data))

    },[axios])
    return (
        <div className='p-5'>
            <h1 className=' my-5 text-5xl font-bold text-center'>All the Pets and Supplies are Here</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    products.map(product=><Catagory key={product._id} product={product}></Catagory>)
                }

            </div>

        </div>
    );
};

export default PetsAndSupplies;