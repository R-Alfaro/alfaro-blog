import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const HomeUseEffect = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Welcome to React!', body: 'lorem ipsum...', author: 'alfaro', id: 3 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 4 }
    ]);

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect ran');
        console.log(name, blogs);
    }, [name, blogs]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('Alfaro')}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default HomeUseEffect;