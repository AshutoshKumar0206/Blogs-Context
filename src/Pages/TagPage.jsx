import React from 'react'
import Header from '../components1/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components1/Blogs';
import Pagination from '../components1/Pagination';

const TagPage = ({isDarkMode, toggleBackground}) => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className={`overflow-y-auto ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Header isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
            <div>
                <div>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blog Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
            <Pagination isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
        </div>
    )
}

export default TagPage