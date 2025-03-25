import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function ModalBox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Did you know...</Modal.Title>
        </Modal.Header>
        <Modal.Body>api dog fact</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;
