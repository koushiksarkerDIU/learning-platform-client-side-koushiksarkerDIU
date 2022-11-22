import React from 'react';

const LeftSideNavBar = ({ category }) => {
    const { name } = category
    return (
        <div className='mx-auto'>
            <button className="btn btn-ghost">{name}</button>
        </div>
    );
};

export default LeftSideNavBar;