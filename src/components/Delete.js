import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Delete = ({ showDelete, setShowDelete, idDelete }) => {
  const [showNotification, setNotification] = useState(false);

  let { data: delFilm } = useQuery("delFilmCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  return (
    <>
      <Modal show={showDelete}>
        <Modal.Body>
          <div className="m-3">
            <h2 className="text-color">Are You Sure to Delete</h2>
          </div>
          <Row>
            <Col>
              <Button
                className="btn-color w-100 my-2 fw-bold px-5"
                onClick={() => setShowDelete(false)}
              >
                No
              </Button>
            </Col>
            <Col>
              <Button
                className="btn-color w-100 my-2 fw-bold px-5"
                onClick={async () => {
                  const response = await API.delete(`/film/delete/${idDelete}`);
                  setShowDelete(false);
                  setNotification(true);
                }}
              >
                Yes
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size="md"
        centered
        show={showNotification}
        onHide={() => setNotification(false)}
      >
        <Modal.Body>
          <h3 className="text-color">Film Successfully deleted!</h3>
          <p onClick={() => setNotification(false)} className="text-light">back to list</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Delete;
