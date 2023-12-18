import React from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import { useState } from "react";
export default function GeneralInfo(props) {
  const [generalInfoFormShow, setGeneralInfoForm] = useState(false);

  const handleGeneralInfoForm = () => {
    const displayFlex = document.querySelector(".GeneralInfoDropDown");
    displayFlex.style.display = "flex";
    setGeneralInfoForm(!generalInfoFormShow);
  };
  return (
    <div className="GeneralInfoContainer">
      <div className="GeneralInfo">
        <div className="GeneralInfoIconAndHeading">
          <img
            src="https://rmathr.github.io/cv-project/ef5bc41af8e0851bed49.png"
            alt=""
          />
          <h3>General Information</h3>
        </div>
        <div className="GeneralInfoDropDownIcon">
          <img
            src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
            alt=""
            onClick={handleGeneralInfoForm}
          />
        </div>
      </div>
      <div className="GeneralInfoDropDown">
        {generalInfoFormShow && <GeneralInfoForm saveInput={props.saveInput} />}
      </div>
    </div>
  );
}
