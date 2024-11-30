import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components1/Blogs';
import Pagination from '../components1/Pagination';
import Header from '../components1/Header';

const CategoryPage = ({isDarkMode, toggleBackground}) => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className={`overflow-y-auto ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Header isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
            <div className={`overflow-y-auto ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blogs On <span>{category}</span>
                </h2>
            </div>
            <Blogs isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
            <Pagination isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
        </div>
    )
}

export default CategoryPage