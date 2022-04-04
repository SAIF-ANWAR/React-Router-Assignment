import React from 'react';

const HomePage = ({ product }) => {
    const { name, img, rating, location, description } = product;
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <h1 className='text-center font-bold'>Location: {location}</h1>
            </div>
            <div className=' pt-2 font-serif tex'>
                <h1><span className='text-cyan-700 font-bold'>Name:</span> <span className='font-semi-bold   pt-1'>{name}</span></h1>
                <h2><span className='text-cyan-700 font-bold'>Review: </span><span className='font-semi-bold pt-1'>{description}</span></h2>
                <h2><span className='text-cyan-700 font-bold'>Rating:</span> <span className='font-semi-bold pt-1'>{rating}</span></h2>
            </div>

        </div>
    );
};

export default HomePage;