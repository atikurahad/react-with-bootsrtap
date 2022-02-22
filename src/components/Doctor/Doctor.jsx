import React from "react";
import { Button, Card } from "react-bootstrap";

const Doctor = (props) => {
  const { image, name, degree, possiton, phone } = props.doctor;
  return (
    <>
      <Card style={{ width: "22rem" }} className="m-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-center text-danger">{name}</Card.Title>
          <hr />
          <Card.Text>{degree}</Card.Text>
          <Card.Text>{possiton}</Card.Text>
          <Button variant="primary">Visit Doctor</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Doctor;
