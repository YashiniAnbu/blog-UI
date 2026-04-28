import React from "react"
import blogs from "../data/BlogData"
import BlogCard from "./BlogCard"

const CyberSecurity = () => {
  const filteredBlogs = blogs.filter((blog) => (blog.domain === "Cyber Security"));
  return (
    <div className="blog-grid">
      {filteredBlogs.map((blog) => (<BlogCard key={blog.id} blog={blog} />
      ))
      }
    </div>
  )
}

export default CyberSecurity