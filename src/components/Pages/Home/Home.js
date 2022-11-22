import React from 'react';
import image from '../../assets/Home/elearning-homepage.png'

const Home = () => {
    return (
        <div className="grid grid-cols-10">
            <div className="col-span-6 bg-purple-200">
                <h1 className=''>Wellcome to Mr. School e-learning platform</h1>
            </div>
            <div className="col-span-4">
                <img className='' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;