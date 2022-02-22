import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const[doctors,setDoctors]= useState([]);
  useEffect(() => {
    fetch('fake.data.json')
    .then(res=> res.json())
    .then(data => setDoctors(data))
  },[]);
  return (
    <div>
      <Container fluid="md">
  <Row>
    <Col xs={12} md={8} lg={6}>
     {
         doctors.map(doctor=> <Doctor
          doctor={doctor}
           key={doctor.id}
           >
           </Doctor>)
       }
    </Col>
  </Row>
</Container>

    </div>
  );
};

export default Doctors;
