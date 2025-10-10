import React from 'react';
import { Link, useLoaderData } from 'react-router';
import TrendingApp from './TrendingApp';

const TrendingApps = () => {
    const trendingApps = useLoaderData();
    console.log(trendingApps);
    return (
        <div className='py-10'>
            <div className='text-center w-11/12 mx-auto'>
                <h2 className='font-bold text-3xl md:text-4xl'>Trending Apps</h2>
                <p className='py-4'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        trendingApps.map(trendingApp => <TrendingApp trendingApp={trendingApp}/>)
                    }
                </div>
                <Link to='/allApps'>
                    <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;