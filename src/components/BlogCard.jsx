import React from "react"
import { useNavigate } from "react-router-dom"

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()

  return (
    <div className="card" onClick={() => navigate(`/blog/${blog.id}`)}>
      <img src={blog.img} alt="" />
      <p>{blog.title}</p>
    </div>
  );
};

export default BlogCard