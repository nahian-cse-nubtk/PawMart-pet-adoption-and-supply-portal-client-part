import React from 'react';
import errorImage from '/App-Error.png'
import { useNavigate } from 'react-router';

const ProductNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center mt-10'>
                    <div className='space-y-3'>
                    <img src={errorImage} alt="Error 404" />
                    <h1 className='font-bold text-4xl text-center'>Oops, product not found!</h1>

                    <div className='flex justify-center'>
                        <button onClick={()=>navigate(-1)} className='btn bg-amber-100 dark:bg-gray-400'>Back</button>
                    </div>

                    </div>
                </div>
    );
};

export default ProductNotFound;