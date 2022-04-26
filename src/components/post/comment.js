import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "./comment.css";
// import { getComnents } from "../../middleware/data";
import { getComnents } from "../../middleware/dataService";
import { Pagination } from "react-bootstrap";
import Moment from "react-moment";
const Comment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const result = async () => {
      const response = await getComnents();
      if (response.length > 0) {
        setComments(() => {
          return response;
        });
      }
    };

    result();
  }, []);

  console.log(comments);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 775 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 775, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <section className="ftco-section testimony-section bg-light comment">
        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Reviews </h2>
              <h3 className="text-center">
                Let view some reviews from customers....
              </h3>
            </div>
            <div className="row people">
              <div className="carousel-testimony">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  // removeArrowOnDeviceType={["tablet", "mobile"]}
                  //deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {comments.map((com, index) => (
                    <div className="item" key={index}>
                      <div className="testimony-wrap">
                        <div className="text">
                          <img
                            className="rounded-circle"
                            src="assets/img/3.jpg"
                            alt=""
                          />
                          <h3 className="name">{com.name}</h3>
                          <p className="title">{com.position}</p>
                          <p className="description">{com.comment} </p>
                          <p className="text-right">
                            <Moment fromNow>{com.date}</Moment>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Comment;
