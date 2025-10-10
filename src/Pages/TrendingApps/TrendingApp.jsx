import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';
import { Link } from 'react-router';

const TrendingApp = ({trendingApp}) => {
    const {id, image, title, companyName, downloads, ratingAvg} = trendingApp;
    const download = parseInt(downloads)/10000000;
    return (
        <Link to={`/appDetails/${id}`}>     
        <div className='bg-white p-5 rounded-2xl space-y-3'>
            <img src={image} alt={title} className='mx-auto w-[40%]'/>
            <p className='font-semibold text-lg'>{title} : {companyName}</p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 bg-[#f1f5e8] p-2 rounded-lg'>
                    <img className='w-[20px]' src={downloadIcon} alt="" />
                    <p className='text-[#00D390] font-semibold'>{download}M</p>
                </div>
                <div className='flex items-center gap-2 bg-[#fff0e1] p-2 rounded-lg'>
                    <img className='w-[20px]' src={starIcon} alt="" />
                    <p className='text-[#FF8811] font-semibold'>{ratingAvg}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default TrendingApp;