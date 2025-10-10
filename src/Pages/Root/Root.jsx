import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            {navigation.state === 'loading' && (
                <div className="flex justify-center items-center h-64">
                <span className="loading loading-bars loading-xl"></span>
                </div>
            )}
            <main className="flex-grow bg-[#f5f5f5]">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;
