import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from '../Custom-Link/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center text-xl text-center p-5 bg-gray-400'>
            <CustomLink className='px-4' to="/">Home</CustomLink>
            <CustomLink className='px-4' to="/reviews">Reviews</CustomLink>
            <CustomLink className='px-4' to="/dashboard">Dashboard</CustomLink>
            <CustomLink className='px-4' to="/blogs">Blogs</CustomLink>
            <CustomLink className='px-4' to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;