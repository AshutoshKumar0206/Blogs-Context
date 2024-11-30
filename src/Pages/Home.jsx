import React from 'react'
import Blogs from '../components1/Blogs'
import Pagination from '../components1/Pagination'
import Header from '../components1/Header'

const Home = ({ isDarkMode, toggleBackground }) => {
  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Header isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
        <div>
            <Blogs isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
            <Pagination isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
        </div>
    </div>
  )
}

export default Home