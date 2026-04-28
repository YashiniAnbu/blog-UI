import React from "react"
import blogs from "../data/BlogData"
import BlogCard from "./BlogCard"

const All = () => {
  return (
    <div className="blog-grid">
      {
      blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))
      }
    </div>
  );
};

export default All