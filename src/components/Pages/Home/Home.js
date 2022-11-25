import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import image1 from '../../assets/Home/1.png'
import image2 from '../../assets/Home/2.jpg'
import image3 from '../../assets/Home/3.jpg'

const Home = () => {
    return (
        <div className='text-center'>
            <div className='py-5'>
                <h1 className='font-extrabold text-5xl py-5'>Wellcome to Mr. School E-learning Platform</h1>
                <Link to='/courses'><button className='btn bg-blue-500'>Explore More to Click here <FaArrowRight className='ml-2' /></button></Link>
            </div>
            <Carousel className='h-1/2
            '>
                <div className='lg:h-screen sm:h-20'>
                    <img src={image1} />
                </div>
                <div className='lg:h-screen sm:h-20'>
                    <img src={image2} />
                </div>
                <div className='lg:h-screen sm:h-20'>
                    <img src={image3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Home;