import { useState } from "react";
import BlogList from "./BlogList";

const HomeFilter = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Welcome to React!', body: 'lorem ipsum...', author: 'alfaro', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 4 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blogs" />
    </div>
  );
}
 
export default HomeFilter;