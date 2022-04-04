import React from 'react';
import RiviewDetails from '../Review-details/RiviewDetails';
import useProducts from '../hooks/Hook';

const Review = (props) => {
    const [products, setProducts] = useProducts()


    return (
        <div>
            <div className="grid grid-cols-3 p-10 justify-items-center gap-10">
                {
                    products.map(product => <RiviewDetails key={product.id} product={product}></RiviewDetails>)
                }

            </div>
        </div>
    );
};

export default Review;