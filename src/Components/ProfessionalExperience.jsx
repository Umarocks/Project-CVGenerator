import React, { useState } from "react";
import ProfessionalForm from "./ProfessionalForm";
function ProfessionalExperience(props) {
  const [professionalInfoFormShow, setProfessionalInfoFormShow] =
    useState(false);

  function handleProfessionalInfoForm() {
    const displayFlex = document.querySelector(".ProfessionalInfoDropDown");
    displayFlex.style.display = "flex";
    setProfessionalInfoFormShow(!professionalInfoFormShow);
  }
  return (
    <>
      <div className="ProfessionalInfoConatiner">
        <div className="ProfessionalInfo">
          <div className="ProfessionalInfoIconAndHead">
            <img
              src="https://rmathr.github.io/cv-project/b5791876cc5188ae758a.png"
              alt=""
            />
            <h3>ProfessionalExperience</h3>
          </div>
          <div className="ProfessionalInfoDropDownIcon">
            <img
              src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
              alt=""
              onClick={handleProfessionalInfoForm}
            />
          </div>
        </div>
        <div className="ProfessionalInfoDropDown">
          {professionalInfoFormShow && <ProfessionalForm saveInput={props.saveInput} />}
        </div>
      </div>
    </>
  );
}

export default ProfessionalExperience;
