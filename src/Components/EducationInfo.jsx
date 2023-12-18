import React, { useState, useRef } from "react";
import EducationForm from "./EducationForm";
export default function EducationInfo(props) {
  const [educationInfoFormShow, setEducationInfoForm] = useState(false);

  const handleEducationInfoForm = () => {
    const displayFlex = document.querySelector(".EducationInfoDropDown");
    displayFlex.style.display = "flex";
    setEducationInfoForm(!educationInfoFormShow);
  };

  return (
    <>
      <div className="EducationInfoContainer">
        <div className="EducationInfo">
          <div className="EducationInfoIconAndHead">
            <img
              src="https://rmathr.github.io/cv-project/462edf5f6d5ba03edebc.png"
              alt=""
            />
            <h3>Education Information</h3>
          </div>
          <div className="EducationInfoDropDownIcon">
            <img
              src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
              alt=""
              onClick={handleEducationInfoForm}
            />
          </div>
        </div>
        <div className="EducationInfoDropDown">
          {educationInfoFormShow && (
            <EducationForm saveInput={props.saveInput} />
          )}
        </div>
      </div>
    </>
  );
}
