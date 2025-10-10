import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';

const InstalledApp = ({app,handleUninstall}) => {
    const {id, image, title, companyName, downloads, ratingAvg, size} = app;
    const download = parseInt(downloads)/10000000;
    return (
        <div className='flex flex-col gap-3 md:flex-row items-center justify-between bg-white p-5 rounded-2xl shadow-lg'>
            <div className='flex items-center gap-5'>
                <div>
                    <img src={image} alt={title} className='w-[60px]'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg md:text-2xl text-start'>{title}: {companyName}</h2>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-1'>
                            <img className='w-[15px] md:w-[20px]' src={downloadIcon} alt="" />
                            <p className='text-sm'>{download}M</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-[15px] md:w-[20px]' src={starIcon} alt="" />
                            <p className='text-sm'>{ratingAvg}</p>
                        </div>
                        <div>
                            <p className='text-sm'>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(id)} className="btn btn-error text-white">Uninstall</button>
            </div>

        </div>
    );
};

export default InstalledApp;