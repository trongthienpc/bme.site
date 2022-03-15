import React from "react";
import { Modal } from "react-bootstrap";

import RoomDetail from "./roomDetail";

const RoomModal = ({ lgShow, setLgShow }) => {
  const room = JSON.parse(localStorage.getItem("room")) || "";
  console.log(room);
  console.log("call room modal");
  return (
    <div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {room.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RoomDetail roomId={room._id} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RoomModal;
