import React from "react";

function GeneralInfoDisplay(props) {
  return (
    <>
      <p className="fullName">{props.generalInfoForm.name}</p>
      <p className="email">{props.generalInfoForm.email}</p>
      <p className="phone">{props.generalInfoForm.phone}</p>
      <p className="address">{props.generalInfoForm.city}</p>
    </>
  );
}

export default GeneralInfoDisplay;
