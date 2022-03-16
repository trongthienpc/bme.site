import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import parse from "html-react-parser";

const BlogDetail = () => {
  console.log("call blog detail");
  const entity = JSON.parse(localStorage.getItem("blog")) || "";
  return (
    <div id="roomDetail">
      <section className="ftco-section ftco-room-section">
        <div className="container">
          <div className="row">
            <div className="room-detail-header">
              <img
                className="d-block w-100"
                src={entity && entity.avatar}
                alt=""
              />
            </div>
            <div className="room-detail-content">
              {/* <h2>{entity && entity.name}</h2> */}
              {entity && parse(entity.content)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
