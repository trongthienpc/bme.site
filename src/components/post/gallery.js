import React from "react";
import { NavLink } from "react-router-dom";
import { getGaleries } from "../../middleware/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Gallery = () => {
  let galleries = getGaleries();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div id="gallery">
      <section className="ftco-gallery">
        <div className="container-fluid">
          <div className="row g-3" style={{ width: "100%" }}>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              //deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {galleries.map((img, index) => (
                <div
                  className="col-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  key={index}
                  style={{ margin: "0 0.5rem" }}
                >
                  <NavLink
                    to=""
                    className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                    style={{
                      backgroundImage: `url(${img.url})`,
                    }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </NavLink>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
