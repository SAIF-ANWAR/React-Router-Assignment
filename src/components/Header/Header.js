import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-xl text-center p-5 bg-gray-300'>
            <Link className='px-4' to="/">Home</Link>
            <Link className='px-4' to="/reviews">Reviews</Link>
            <Link className='px-4' to="/dashboard">Dashboard</Link>
            <Link className='px-4' to="/blogs">Blogs</Link>
            <Link className='px-4' to="/about">About</Link>
        </nav>
    );
};

export default Header;