import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllRoom, getRoomById } from "../../../middleware/dataService";
import RoomModal from "./roomModal";
import "./room.css";
const Roms = () => {
  const [rooms, setRooms] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [roomName, setRoomName] = useState("No choose");
  const [roomId, setRoomId] = useState();
  const [active, setActive] = useState(false);

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
            {rooms &&
              rooms.map((room, index) => (
                <div
                  className="col-md-6 col-lg-4 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  key={index}
                >
                  <div
                    className="room-wrap d-md-flex flex-md-column-reverse"
                    onClick={() => handeDetail(room.name, room._id)}
                  >
                    <NavLink
                      to="#"
                      className="img img-room"
                      style={{ backgroundImage: `url(${room.image})` }}
                    ></NavLink>
                    <div className="text p-5 text-center">
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
                    </div>
                  </div>
                </div>
              ))}
            {active && <RoomModal lgShow={lgShow} setLgShow={setLgShow} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roms;
