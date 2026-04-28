import React from "react"
import blogs from "../data/BlogData"
import BlogCard from "./BlogCard"

const FullStackDev = () => {
  const filteredBlogs = blogs.filter((blog) => (blog.domain === "Full Stack Development"))

  return (
    <div className="blog-grid">
      {filteredBlogs.map((blog) => (<BlogCard key={blog.id} blog={blog} />
      ))
      }
    </div>
  )
}

export default FullStackDev