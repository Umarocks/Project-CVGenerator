import React from "react";
import EducationDisplay from "./EducationDisplay";
import GeneralInfoDisplay from "./GeneralInfoDisplay";
import ProfessionalDisplay from "./ProfessionalDisplay";

function Display(props) {
  return (
    <>
      <div className="displayContainer">
        <div className="cv-basic-info">
          {!props.generalEmpty && (
            <GeneralInfoDisplay generalInfoForm={props.generalInfoForm} />
          )}
        </div>
        <div className="cv-education-info">
          <p className="cv-section-title">Education</p>
          {!props.educationEmpty &&
            props.educationInfoForm.map((element) => (
              <EducationDisplay key={element.id} element={element} />
            ))}
        </div>
        <div className="cv-pro-info">
          <p className="cv-section-title">Professional Experience</p>
          {!props.professionalEmpty &&
            props.professionalInfoForm.map((element) => (
              <ProfessionalDisplay key={element.id} element={element} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Display;
