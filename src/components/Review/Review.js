import React from 'react';
import RiviewDetails from '../Review-details/RiviewDetails';
import useProducts from '../hooks/Hook';

const Review = (props) => {
    const [products, setProducts] = useProducts()


    return (
        <div>
            <h1 className='text-4xl text-blue-600 text-center pt-5 font-serif '>All Reviews</h1>
            <div className="grid grid-cols-3 p-10 justify-items-center gap-10">
                {
                    products.map(product => <RiviewDetails key={product.id} product={product}></RiviewDetails>)
                }

            </div>
        </div>
    );
};

export default Review;