import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CourseDetailsCard = () => {
    const course = useLoaderData();
    // console.log(course);
    const { id, name, img, course_duration, course_curriculum, details_1, details_2, details_3, ratting, price, course_instructor } = course;
    const handleDownload = () => {
        toast.success('pdf is downloading')
    }
    return (
        <div className="my-10">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-2xl">
                <div className="flex items-center justify-center">
                    <span className="px-2 py-1 font-bold rounded text-3xl">Course : {name}</span>
                </div>
                <div className="mt-3">
                    <div className="flex my-6 flex-col lg:flex-row">
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
                    <button onClick={handleDownload} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                        Download Pdf</button>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mt-4">
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