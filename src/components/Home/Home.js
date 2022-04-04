import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/Hook';
import HomePage from './HomePage';

const Home = ({ logo }) => {

    const [products, setProducts] = useProducts([])
    const homeProducts = products.slice(0, 3)


    return (
        <div>
            <div className='flex justify-between'>
                <div className='p-7 pt-10 mt-10 px-5'>
                    <h1 className='text-5xl font-bold'>Tour De Bangladesh</h1>
                    <h2 className='text-4xl font-bold mt-2'>Find the best places to visit in Bangladesh</h2>
                    <p className='text-xl mt-3'>Travel Bangladesh is a website that promotes travel in Bangladesh. You can find the information
                        about which  places to visit in  this country. You will also find the best places to travel and
                        the most  reviewed places in Bangladesh.
                    </p>
                </div>

                <div className='w-4/5 pt-10 mx-3'>
                    <img className=' rounded-lg' src={logo} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-4xl text-center font-bold mt-10 pt-5 pb-5'>Travellers Reviews</h1>
            </div>
            <div className='grid grid-cols-3 p-8 justify-items-center gap-10'>
                {
                    homeProducts.map(pd => <HomePage key={pd.id} product={pd}></HomePage>)
                }

            </div>
            <div className='text-center p-5'>
                <Link to="/reviews" className='text-xl bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-300 '>See All Reviews</Link>
            </div>

        </div>
    );
};

export default Home;