import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const HomeIsPending = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        console.log('use effect ran');
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
               setBlogs(data); 
               setIsPending(false);
            })
        }, 1500)

    }, []);

    return (
        <div className="home">
            { isPending && <div><h1>Loading......</h1></div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default HomeIsPending;