import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import LeftSideNavBar from '../LeftSideNavBar/LeftSideNavBar';

const Courses = () => {
    const categoryList = useLoaderData();
    return (
        <div>

            <div className="grid grid-cols-10">
                <div className="col-span-2 bg-purple-200 text-center">
                    <h1 className='text-3xl'>Course List </h1>
                    {
                        categoryList.map(category => <LeftSideNavBar key={category.id} category={category}></LeftSideNavBar>)
                    }

                </div>
                <div className="col-span-8">
                    <div className='grid grid-cols-2 gap-4'>
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