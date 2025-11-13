import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';
import Catagory from '../Catagory/Catagory';
import Loading from '../Loading/Loading';

const FilteredCategory = () => {
    const axios = useAxios();
    const {categoryName} = useParams()
    const [products,setProducts] =useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(`/categories/${categoryName}`)
        .then(data=>{
            setProducts(data.data);
            setTimeout(()=>{
                setLoading(false);
            },500)
        })

    },[axios, categoryName])
    if (loading) {
    return (
      <div>
      <Loading></Loading>
      </div>
    );
  }

    return (
        <div className='p-5 bg-amber-50 dark:bg-gray-600'>
            <h1 className='py-10 text-center text-4xl font-bold'>{categoryName} Category </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                products.map(product=><Catagory key={product._id} product={product}></Catagory>)

                }
            </div>

        </div>
    );
};

export default FilteredCategory;
