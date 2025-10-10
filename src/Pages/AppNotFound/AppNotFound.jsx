import React from 'react';
import NotFound from '../../assets/App-Error.png'
const AppNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center my-5 gap-3 px-3'>
            <img className='w-[80%] md:w-[30%]' src={NotFound} alt="" />
            <h2 className='font-bold text-3xl'>OPPS!! APP NOT FOUND</h2>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back!</div>
        </div>
    );
};

export default AppNotFound;