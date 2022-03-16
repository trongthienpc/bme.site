import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllRoom, getRoomById } from "../../../middleware/dataService";
import RoomModal from "./roomModal";
import { getServices } from "../../../middleware/data";
import "./room.css";
import { Carousel, CarouselItem } from "react-bootstrap";
const Roms = () => {
  const [rooms, setRooms] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [roomName, setRoomName] = useState("No choose");
  const [roomId, setRoomId] = useState();
  const [active, setActive] = useState(false);
  let services = getServices();
  useEffect(() => {
    const result = async () => {
      const response = await getAllRoom();
      if (response.length > 0)
        setRooms(() => {
          return response;
        });
    };

    result();
  }, []);

  console.log(rooms);

  const handeDetail = async (text, id) => {
    const roomDetail = await getRoomById(id)
      .then((response) => {
        localStorage.removeItem("room");
        localStorage.setItem("room", JSON.stringify(response));
      })
      .then((data) => {
        // setRoomName(text);
        // setRoomId(id);
        setLgShow(true);
        setActive(true);
      });
    return roomDetail;
  };
  return (
    <div id="rooms">
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Our Rooms</span>
              <h2 className="mb-4">Featured Rooms</h2>
            </div>
          </div>
          <div className="row justify-content-center room">
            <section className="light">
              <div className="container">
                {rooms &&
                  rooms.map((room, index) => (
                    // <div
                    //   className="col-md-6 col-lg-4 d-flex align-items-stretch"
                    //   data-aos="flip-left"
                    //   data-aos-delay="100"
                    //   data-aos-duration="1000"
                    //   key={index}
                    // >
                    //   <div
                    //     className="room-wrap d-md-flex flex-md-column-reverse"
                    //     onClick={() => handeDetail(room.name, room._id)}
                    //   >
                    //     <NavLink
                    //       to="#"
                    //       className="img img-room"
                    //       style={{ backgroundImage: `url(${room.image})` }}
                    //     ></NavLink>
                    //     <div className="text p-5 text-center">
                    //       <h3>
                    //         <NavLink to="#">{room.name}</NavLink>
                    //       </h3>
                    //       <p>{room.description}</p>
                    //       <p className="mb-0 mt-2">
                    //         <span className="me-3 price">
                    //           ${room.price} <small>/ night</small>
                    //         </span>
                    //         <button to="#" className="btn btn-primary">
                    //           Book Now
                    //         </button>
                    //       </p>
                    //     </div>
                    //   </div>
                    // </div>

                    <div
                      key={index}
                      className="card mb-6 h-100"
                      style={{ maxWidth: "1080px", margin: "6rem auto" }}
                    >
                      <div className="col-md-8">
                        <Carousel>
                          {room &&
                            room.images.map((img, i) => (
                              <CarouselItem key={i}>
                                <img
                                  className="d-block w-100 "
                                  src={img}
                                  alt={`${i} slide`}
                                  key={i}
                                />
                              </CarouselItem>
                            ))}
                        </Carousel>
                      </div>
                      <div className="col-md-4">
                        <div className="card-body text p-3 text-center pt-5">
                          <h3>
                            <NavLink to="#">{room.name}</NavLink>
                          </h3>
                          <p>{room.description}</p>
                          <p className="mb-0 mt-2">
                            <span className="me-3 price">
                              ${room.price} <small>/ night</small>
                            </span>
                            <button to="#" className="btn btn-primary">
                              Book Now
                            </button>
                          </p>
                          {/* <div className="d-md-flex mt-5"> */}
                          <ul className="list">
                            <li>
                              <span>Max:</span> {room.max}
                            </li>
                            <li>
                              <span>Size:</span> {room.size}
                            </li>
                            {/* </ul>
                          <ul className="list ms-md-5"> */}
                            <li>
                              <span>View:</span> {room.view}
                            </li>
                            <li>
                              <span>Bed:</span> {room.bed}
                            </li>
                          </ul>
                          {/* </div> */}

                          {/* <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {active && <RoomModal lgShow={lgShow} setLgShow={setLgShow} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roms;
