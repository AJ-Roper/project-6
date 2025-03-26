import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function ModalBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Did you know...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          insert my api for dog facts once i can actually see the modal ._.{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Wow!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;
