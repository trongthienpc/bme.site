import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./roomDetail.css";
import { getServices } from "../../../middleware/data";

const RoomDetail = ({ roomId }) => {
  const room = JSON.parse(localStorage.getItem("room")) || "";

  let services = getServices();
  return (
    <div id="roomDetail">
      <section className="ftco-section ftco-room-section">
        <div className="container">
          <div className="row">
            <Carousel>
              {room &&
                room.images.map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      className="d-block w-100"
                      src={img}
                      alt={`${i} slide`}
                      key={i}
                    />
                  </CarouselItem>
                ))}
            </Carousel>
            <div className="room-detail-content">
              <h2>{room.name}</h2>
              <p>{room.description}</p>
              <div className="d-md-flex mt-5 mb-5">
                <ul className="list">
                  <li>
                    <span>Max:</span> {room.max}
                  </li>
                  <li>
                    <span>Size:</span> {room.size}
                  </li>
                </ul>
                <ul className="list ms-md-5">
                  <li>
                    <span>View:</span> {room.view}
                  </li>
                  <li>
                    <span>Bed:</span> {room.bed}
                  </li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h3>Hotel Services</h3>
                <div className="room-detail-services">
                  {services.map((s, index) => (
                    <p key={index} style={{ padding: "10px 0.5rem" }}>
                      <span
                        style={{
                          backgroundColor: "#c5a880",
                          color: "#fff",
                          padding: "0.5rem",
                        }}
                      >
                        {s.name}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
