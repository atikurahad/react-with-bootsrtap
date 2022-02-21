import React, { useEffect, useState } from 'react';
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
       {
         doctors.map(doctor=> <Doctor
          doctor={doctor}
           key={doctor.id}
           >
           </Doctor>)
       }
    </div>
  );
};

export default Doctors;
