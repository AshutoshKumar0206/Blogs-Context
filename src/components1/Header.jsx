import React from 'react'
import App from '../App'
const Header = ({ isDarkMode, toggleBackground }) => {
  return (
<div className={`w-full border shadow-md py-3 fixed top-0 bg-white ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
<header className='text-center'>
    <span className='flex items-center justify-center'>
    <h1 className='text-3xl font-bold uppercase'>Blogs-Context</h1>
    <button onClick={toggleBackground} 
      className={`relative rounded-full w-20 ml-16 h-7 flex items-center px-2 ${isDarkMode ? 'bg-white text-black' : 'bg-slate-900 text-white'}`}>
        <div
    className={`w-8 h-6 rounded-full transform transition-transform ${
      isDarkMode ? 'translate-x-10 bg-black' : 'translate-x-0 bg-white'
    }`}
  ></div></button></span>
    </header>
</div>
   
  )
}

export default Header
