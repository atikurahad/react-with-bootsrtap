import React from 'react';

const Doctor = (props) => {
 const {image,name}=props.doctor;
 const imgStyle={height:"60px", width:"50px"}
  return (
    <>
      <div className="doctor">
        <img className={imgStyle} src={image} alt="doctor" />
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Doctor;
