import React from "react";
// const educationFormObj = {
//   id: id,
//   degree: degreeRef.current.value,
//   school: schoolRef.current.value,
//   city: cityRef.current.value,
//   country: countryRef.current.value,
//   startDate: startDateRef.current.value,
//   endDate: endDateRef.current.value,
//   form: "EducationInfo",
// };
function EducationDisplay(props) {
  return (
    <>
      <div className="entry">
        <div className="cv-degree-school">
          <p className="degree">{props.element.degree}</p>
          <p className="school">{props.element.school}</p>
        </div>
        <div className="cv-dates">
          <p className="startDate">{props.element.startDate} </p>
          <p className="endDate">{props.element.endDate}</p>
        </div>
        <div className="cv-city-country">
          <p className="city">{props.element.city}</p>
          <p className="country">{props.element.country}</p>
        </div>
      </div>
    </>
  );
}

export default EducationDisplay;
