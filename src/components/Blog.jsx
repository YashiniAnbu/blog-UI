import { useParams } from "react-router-dom"
import blogs from "../data/BlogData"
import Header from "./Header"

const Blog = () => {
  const { id } = useParams()
  const blog = blogs.find((blog) => blog.id === Number(id))

  return (
    <>
      <Header showNavbar={false} />
      <div className="blog-page">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-body">
          <div className="blog-img">
            <img src={blog.img} alt="" />
          </div>
          <div className="blog-content">
            <p className="blog-domain">{blog.domain}</p>
            <p className="blog-date">June 02, 2024</p>
            <p className="blog-text">{blog.content}</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog