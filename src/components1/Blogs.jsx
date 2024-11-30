import { useContext } from "react";
import { AppContext } from "../context1/AppContext";
import BlogDetails from "./BlogDetails";
export default function Blogs({isDarkMode, toggleBackground}) {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className={`flex flex-col gap-y-10 my-4 min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} isDarkMode={isDarkMode} toggleBackground={toggleBackground}/>
        ))
      )}
    </div>
  );
}
