import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import Layout from "./Layout"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Layout>
      <section className="section">
        <Title title={title} />
        <div className="section-center blogs-center">
          {blogs.map(blog => (
            <Blog key={blog.id} {...blog} />
          ))}
        </div>
        {showLink && (
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        )}
      </section>
    </Layout>
  )
}
export default Blogs
