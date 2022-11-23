import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavBar = ({ category }) => {
    const { name, id } = category
    return (
        <div className='mx-auto mt-2'>
            <Link to={`/course/${id}`}><button className="btn btn-ghost w-full">{name}</button></Link>
        </div>
    );
};

export default LeftSideNavBar;