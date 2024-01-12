import React from 'react'
import Blogs from '../components1/Blogs'
import Pagination from '../components1/Pagination'
import Header from '../components1/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <div>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}

export default Home