import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context1/AppContext";
import Header from "../components1/Header";
import BlogDetails from "../components1/BlogDetails";
import {baseUrl} from "../baseUrl";

const BlogPage = ({isDarkMode, toggleBackground}) => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);

    } 

    catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {//is blog id is available
      fetchRelatedBlogs();
    }
  }, [location.pathname]);//calls whenever blog id changes  

  return (
    <div className={`overflow-y-auto ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : blog ? (
          <div className={`overflow-y-auto ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <BlogDetails post={blog} isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
            <h2 className="flex justify-center items-center">Releated Blogs</h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
