import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetailsCard = () => {
    const course = useLoaderData();
    // console.log(course);
    const { id, name, img, course_duration, course_curriculum, details_1, details_2, details_3, ratting, price, course_instructor } = course;
    return (
        <div className="my-10">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl">
                <div className="flex items-center justify-center">
                    <span className="px-2 py-1 font-bold rounded text-3xl">Course : {name}</span>
                </div>
                <div className="mt-3">
                    <div className="flex my-6">
                        <img className='h-48' src={img} alt="" />
                        <div className='ml-5'>
                            <p className="text-xl font-semibold mb-5">{course_curriculum}</p>
                            <p className="text-lg underline italic my-3">Course Instructor: {course_instructor}</p>
                            <p className="text-lg  mt-3">Course Duration: {course_duration} months</p>
                        </div>
                    </div>
                    <div className='my-10'>
                        <p className='text-lg font-medium my-3'>{details_1?.heading}</p>
                        <p>{details_1?.p}</p>
                    </div>
                    <div className='my-10'>
                        <p className='text-lg font-medium my-3'>{details_2?.heading}</p>
                        <p>{details_2?.p}</p>
                    </div>
                    <div className='my-10'>
                        <p className='text-lg font-medium my-3'>{details_3?.heading}</p>
                        <p>{details_3?.p}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p><span className='font-medium'>Ratting:</span> {ratting}</p>
                    <p><span className='font-medium'>Price:</span> ${price}</p>
                    <Link to={`/checkout/${id}`}><button className="btn btn-outline btn-primary">Get Premium Access</button></Link>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsCard; 