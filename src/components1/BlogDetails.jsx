import React from "react";
import { NavLink } from "react-router-dom";
const BlogDetails = ({post, isDarkMode}) => {
  return (
    <div className={`ml-[100px] my-11 mt-[50px] ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-lg'>{post.title}</span>
      </NavLink>
      <p className='text-sm mt-[4px]'>
        By
        <span className='italic'>{post.author}</span>
        {" "}on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className='underline font-bold'>{post.category}</span>
        </NavLink>
        </p>
      <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
      <p className='text-md mt-[14px]'>{post.content}</p>
      <div className='flex gap-x-3'>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className='font-bold underline
                text-blue-700 text-xs mt-[5px]'>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
