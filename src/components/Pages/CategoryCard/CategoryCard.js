import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { id, name, img, course_instructor, ratting, price } = category;
    // console.log(category);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-60 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{course_instructor}</p>
                <p>{ratting}</p>
                <p>${price}</p>
                <div className="card-actions justify-between">
                    <Link to={`/course/${id}`}><button className="btn btn-outline">Course Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;