import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import LeftSideNavBar from '../Pages/LeftSideNavBar/LeftSideNavBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <>
                <div className="grid grid-cols-10">
                    <div className="col-span-2 bg-purple-200">
                        <LeftSideNavBar></LeftSideNavBar>
                    </div>
                    <div className="col-span-8">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Main;