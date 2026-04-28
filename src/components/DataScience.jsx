import React from "react"
import BlogCard from "./BlogCard"
import blogs from "../data/BlogData"

const DataScience = () => {

  const filteredBlogs = blogs.filter( (blog) => (blog.domain === "Data Science"))

  return (
    <div className="blog-grid">
      {filteredBlogs.map((blog) => (<BlogCard key={blog.id} blog={blog} />
      ))
      }
    </div>
  );
};

export default DataScience