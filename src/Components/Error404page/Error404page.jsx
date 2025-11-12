import React from 'react';
import errorImage from '/error-404.png'
import { useNavigate } from 'react-router';

const Error404page = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='space-y-3'>
            <img src={errorImage} alt="Error 404" />
            <h1 className='font-bold text-4xl text-center'>Oops, page not found!</h1>
            <p className='text-center '>The page your are looking is not available</p>
            <div className='flex justify-center'>
                <button onClick={()=>navigate(-1)} className='btn bg-amber-100 dark:bg-gray-400'>Back</button>
            </div>

            </div>
        </div>
    );
};

export default Error404page;