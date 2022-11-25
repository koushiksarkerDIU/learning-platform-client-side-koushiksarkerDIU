import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import LeftSideNavBar from '../LeftSideNavBar/LeftSideNavBar';

const Courses = () => {
    const categoryList = useLoaderData();
    return (
        <div>

            <div className="lg:grid lg:grid-cols-10 pt-10 ">
                <div className="lg:col-span-2 text-center mb-5">
                    <h1 className='text-3xl font-semibold my-5'>Course List </h1>
                    {
                        categoryList.map(category => <LeftSideNavBar key={category.id} category={category}></LeftSideNavBar>)
                    }

                </div>
                <div className="lg:col-span-8">
                    <div className='grid lg:grid-cols-2 gap-6 justify-items-center'>
                        {
                            categoryList.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;