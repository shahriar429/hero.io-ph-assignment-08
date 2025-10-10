import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp, removeFromInstalledApp } from '../../utility/addToDB';
import InstalledApp from './InstalledApp';
import { toast, ToastContainer } from 'react-toastify';

const InstalledApps = () => {
    const [installApp, setInstallApp] = useState([]);
    const appData = useLoaderData();
    useEffect(()=>{
        const installedAppData = getInstalledApp();
        const convertedInstalledAppData = installedAppData.map(id => parseInt(id));
        const myInstalledApp = appData.filter(app => convertedInstalledAppData.includes(app.id));
        setInstallApp(myInstalledApp);
    }, [appData]);

    const handleUninstall = (id) => {
        removeFromInstalledApp(id);
        const updatedList = installApp.filter(app => app.id !== id);
        setInstallApp(updatedList);
        toast("App Uninstalled Successfully!");
    }

    const handleSort = (order) => {
        if(order === 'ascending'){
            setInstallApp([...installApp].sort((a, b) => a.downloads - b.downloads));
        }
        if(order === 'descending'){
            setInstallApp([...installApp].sort((a, b) => b.downloads - a.downloads));
        }
    }

    return (
        <div>
            <div className='py-10 w-10/12 mx-auto'>
                <div className='text-center'>
                    <h2 className='font-bold text-3xl md:text-4xl'>Your Installed Apps</h2>
                    <p className='py-4'>Explore All Trending Apps on the Market developed by us</p>
                    <div className="flex flex-col md:flex-row gap-3 justify-between px-3">
                        <h2 className='font-bold text-lg md:text-2xl text-start'>{installApp.length} Installed Apps Found</h2>
                        <div>
                            <h2>Sort By Downloads</h2>
                            <select onChange={(e) => handleSort(e.target.value)} className="select select-primary">
                                <option disabled selected>Select Order</option>
                                <option value="ascending">Low to High (ascending)</option>
                                <option value="descending">High to Low (descending)</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-5 mt-5'>
                        {installApp.map(app => 
                            <InstalledApp 
                                key={app.id} 
                                handleUninstall={handleUninstall} 
                                app={app}
                            />
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default InstalledApps;
