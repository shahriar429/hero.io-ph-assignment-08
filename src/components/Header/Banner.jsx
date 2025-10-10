import React from 'react';
import bannerImg from '../../assets/hero.png'
import googlePlay from '../../assets/googlePlay.png'
import appStore from '../../assets/appStore.png'

const Banner = () => {
    return (
        <div className='pt-10'>
            <div className='text-center space-y-4 w-10/12 md:w-8/12 mx-auto'>
                <h2 className='font-bold text-3xl md:text-5xl'>We Build <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
                <p className='text-lg'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='space-x-2 flex justify-center'>
                    <div className='btn btn-outline btn-primary'>
                        <img className='w-[30px]' src={googlePlay} alt="" />
                        <a href='https://play.google.com/store/' target='_blank'>Google Play</a>
                    </div>
                    <div className='btn btn-outline btn-primary'>
                        <img className='w-[30px]' src={appStore} alt="" />
                        <a href='https://www.apple.com/app-store/' target='_blank'>App Store</a>
                    </div>
                </div>
                <img className='mx-auto w-[80%] md:w-[60%]' src={bannerImg} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center flex flex-col items-center gap-4 py-10  px-5'>
                <h2 className='font-bold text-2xl md:text-4xl'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 text-center justify-between items-center gap-5 md:gap-20'>
                    <div>
                        <p>Total Downloads</p>
                        <p className='font-bold text-2xl md:text-4xl'>29.6M</p>
                        <p className='text-sm'>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <p className='font-bold text-2xl md:text-4xl'>906K</p>
                        <p className='text-sm'>46% more than last month</p>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p>Active Apps</p>
                        <p className='font-bold text-2xl md:text-4xl'>132+</p>
                        <p className='text-sm'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;