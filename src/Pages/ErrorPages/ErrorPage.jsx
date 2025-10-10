import React from 'react';
import ErrorImg from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center my-5 gap-3 px-3'>
            <img className='w-[80%] md:w-[30%]' src={ErrorImg} alt="" />
            <h2 className='font-bold text-3xl'>Oops, page not found!</h2>
            <p>The page you are looking for is not available.</p>
            <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back!</div>
        </div>
    );
};

export default ErrorPage;