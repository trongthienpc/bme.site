import React from "react";
import { Modal } from "react-bootstrap";
import BlogDetail from "./blogDetail";

const BlogModal = ({ lgShow, setLgShow, blogName, blogId }) => {
  console.log(lgShow);
  const handleHide = () => {
    setLgShow(false);
  };

  return (
    <div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {blogName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogDetail blogId={blogId} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BlogModal;
