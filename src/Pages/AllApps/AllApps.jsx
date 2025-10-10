import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from './AllApp';
import AppNotFound from '../AppNotFound/AppNotFound';

const AllApps = () => {
    const allApps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div>
            <div className='py-10 w-11/12 mx-auto text-center'>
                <h2 className='font-bold text-3xl md:text-4xl'>Our All Applications</h2>
                <p className='py-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between p-2'>
                    <h3 className='font-bold text-lg'>({filteredApps.length}) Apps Found</h3>
                    <div className='bg-white py-2 px-4 rounded-lg w-[40%] md:w-[30%] input flex items-center gap-2'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder='search Apps'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full outline-none'
                        />
                    </div>
                </div>
                {filteredApps.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {filteredApps.map(allApp => (
                            <AllApp key={allApp.id} allApp={allApp} />
                        ))}
                    </div>
                ) : (
                    <AppNotFound />
                )}

            </div>
        </div>
    );
};

export default AllApps;