import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components1/Blogs';
import Pagination from '../components1/Pagination';
import Header from '../components1/Header';

const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div>
            <Header />
            <div>
                <div>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blogs On <span>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage