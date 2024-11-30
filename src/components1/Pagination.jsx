import React, { useContext } from 'react'
import { AppContext } from '../context1/AppContext';

const Pagination = ({ isDarkMode, toggleBackground }) => {
    const{page, handlePageChange,totalPages} = useContext(AppContext);
    if (!totalPages) return null;
    return (
    <div className={`w-full flex justify-center items-center border-2 fixed bottom-0 bg-white 
    ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
            <div className='flex gap-x-2'>
            {page > 1 &&
               (<button
               className={`rounded-md bg-white border-2 px-4 py-1 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`} 
               onClick = {()=>handlePageChange(page-1)}>
                    Previous
                </button>) 
            }
            {page < totalPages &&
               (<button
                className={`rounded-md bg-white border-2 px-4 py-1 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`} 
                onClick = {()=>handlePageChange(page+1)}>
                    Next
                </button>) 
            }
            </div>
            <p className='font-bold text-sm'>
                Page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination