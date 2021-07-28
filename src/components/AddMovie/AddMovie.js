import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random,
      title,
      description,
      posterUrl: url,
      rate
    };

    handleAdd(newMovie);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Title:
            <input
              type="text"
              className="form-control"
              placeholder="enter titile movie"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              placeholder="enter dezcription movie"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            PosterUrl:
            <input
              type="url"
              className="form-control"
              placeholder="enter url movie"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            rate:
            <input
              type="text"
              className="form-control"
              placeholder="enter rate movie"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <Button variant="primary" type="submit">
              submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
