// export default App
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context1/AppContext";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  //parameters searching
  const [searchParams,setSearchParams] = useSearchParams();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // Toggle the theme
  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode); // Switch between light and dark modes
  };
  useEffect(() => {
    // // Fetch the inital Blogposts data
    // fetchBlogPosts();
    // // eslint-disable-next-line react-hooks/exhaustive-deps

    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes("tags")){
    
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page))
    }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>} />
      <Route path="/blog/:blogId" element={<BlogPage isDarkMode={isDarkMode} toggleBackground={toggleBackground}/> } />
      <Route path="/tags/:tag" element={<TagPage isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>} />
      <Route path="/categories/:category" element={<CategoryPage isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>} />
    </Routes>
  );
}
