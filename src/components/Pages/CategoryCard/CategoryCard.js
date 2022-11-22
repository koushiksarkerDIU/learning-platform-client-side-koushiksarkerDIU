import React from 'react';

const CategoryCard = ({ category }) => {
    const { name, img } = category;
    console.log(category);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-60 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-between">
                    <button className="btn btn-ghost">Course Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;