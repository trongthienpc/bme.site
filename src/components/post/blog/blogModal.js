import React from "react";
import { Modal } from "react-bootstrap";
import BlogDetail from "./blogDetail";

const BlogModal = ({ lgShow, setLgShow }) => {
  console.log(lgShow);
  const blog = JSON.parse(localStorage.getItem("blog")) || "";
  const handleHide = () => {
    setLgShow(false);
  };

  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {blog.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogDetail blogId={blog._id} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BlogModal;
