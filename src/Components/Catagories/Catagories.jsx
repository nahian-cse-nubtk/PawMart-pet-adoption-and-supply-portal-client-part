import React, { useEffect, useState } from 'react';
import Catagory from '../Catagory/Catagory';
import useAxios from '../../Hooks/useAxios';
import { Link } from 'react-router';

const Catagories = () => {

    const axios =useAxios();
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        axios.get('/onlycategories')
        .then(data=>{
            setCategories(data.data);
        })

    },[axios])
    //console.log(categories);

    return (
        <div>
            <h1 className='font-bold text-4xl text-center'>All Catagories Here</h1>
            <p className='text-center text-xl my-2'>Select a category from below</p>
            <div className=' flex justify-center gap-2 my-5'>
                {
                    categories.map(category=><Link to={`/categories/${category}`}><button className="btn btn-soft btn-primary">{category}</button></Link>)
                }


            </div>

        </div>
    );
};

export default Catagories;