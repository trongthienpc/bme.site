import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllBlog, getBlogById } from "../../../middleware/dataService";
import BlogModal from "./blogModal";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [blogName, setBlogName] = useState("No choose");
  const [blogId, setBlogId] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const getEntities = async () => {
      const results = await getAllBlog();
      if (results.length > 0) {
        setBlogs(results);
      }
    };
    getEntities();
  }, []);

  const handleDetail = async (name, id) => {
    setBlogName(name);
    setBlogId(id);
    setLgShow(true);
    const entity = await getBlogById(id);
    if (entity) localStorage.setItem("blog", JSON.stringify(entity));
    setActive(true);
  };

  return (
    <div id="blog">
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center mb-5">
            <div
              className="col-md-7 heading-section text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Our Blog</span>
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-md-6 col-lg-3 d-flex" key={index}>
                <div
                  className="blog-entry justify-content-end"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <NavLink
                    to="blog-single.html"
                    className="block-20 img d-flex align-items-end"
                    style={{
                      backgroundImage: `url(${blog.avatar})`,
                    }}
                  ></NavLink>
                  <div className="text">
                    <p className="meta">
                      <span>{blog.author}</span> <span>{blog.createdAt}</span>
                    </p>
                    <h3 className="heading mb-3">
                      <NavLink
                        to="#"
                        onClick={() => handleDetail(blog.name, blog._id)}
                      >
                        {blog.name}{" "}
                      </NavLink>
                    </h3>
                    <p>{blog.quotes}</p>
                  </div>
                </div>
              </div>
            ))}
            {active && (
              <BlogModal
                lgShow={lgShow}
                setLgShow={setLgShow}
                blogName={blogName}
                blogId={blogId}
                setActive={setActive}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
