import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import starIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { addToInstallApp, getInstalledApp, removeFromInstalledApp } from '../../utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';

const AppDetails = () => {
    const appDetails = useLoaderData();
    const {id} = useParams();
    const appId = parseInt(id);
    const appDetail = appDetails.find(app => app.id === appId);
    const {image, title, companyName, downloads, ratingAvg, reviews, size, description, ratings} = appDetail;
    const download = parseInt(downloads)/10000000;
    const review = parseInt(reviews)/1000;

    const [installBtn , setInstallBtn] = useState(false);
    useEffect(() => {
        const installedApps = getInstalledApp();
        if(installedApps.includes(appId)){
            setInstallBtn(true);
        }
    }, [appId]);
    const handleInstallToggle = (id) => {
        toast("App Installed Succesfully!");
        const installedApps = getInstalledApp();
        if(installedApps.includes(id)){
            removeFromInstalledApp(id);
            setInstallBtn(false);
        } else {
            addToInstallApp(id);
            setInstallBtn(true);
        }
    }

    return (
        <div>
            <div className='flex py-10 w-10/12 mx-auto gap-10'>
                <div className='w-[50%] md:w-[30%]'>
                    <img src={image} alt={title} className='mx-auto w-full'/>
                </div>
                <div className='space-y-3 w-full'>
                    <p className='font-semibold text-2xl md:text-4xl'>{title} : {companyName}</p>
                    <p>Developper by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{companyName}</span></p>
                    <hr />
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <div className='flex flex-col items-center text-center'>
                            <img src={downloadIcon} alt="" />
                            <p>Downloads</p>
                            <p className='font-bold text-2xl md:text-3xl'>{download}M</p>
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <img src={starIcon} alt="" />
                            <p>Average Ratings</p>
                            <p className='font-bold text-2xl md:text-3xl'>{ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center text-center col-span-2 md:col-span-1'>
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <p className='font-bold text-2xl md:text-3xl'>{review}K</p>
                        </div>
                    </div>
                    <div className='text-center md:text-start'>
                        <button
                            onClick={() => handleInstallToggle(appId)}
                            className={'btn text-white btn-success'}
                            disabled={installBtn}
                        >
                            {installBtn ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                        <ToastContainer />
                    </div>

                </div>
            </div>
            <hr className='w-10/12 mx-auto' />

            <div className='w-10/12 mx-auto'>
                <p className='font-semibold text-lg md:text-2xl'>Ratings Overview</p>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart layout='vertical' data={ratings}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis type='number' />
                        <YAxis type='category' dataKey='name' />
                        <Tooltip />
                        <Bar dataKey='count' fill='#FF8811' barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <hr className='w-10/12 mx-auto' />
            <div className='w-10/12 mx-auto py-10'>
                <div>
                    <p className='font-semibold text-lg md:text-2xl'>Description</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;