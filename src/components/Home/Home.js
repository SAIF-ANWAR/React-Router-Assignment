import React from 'react';


const Home = ({ logo }) => {
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
                <h1 className='text-4xl text-center font-bold mt-10 pt-5'>Travellers Reviews</h1>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;