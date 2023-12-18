import React from "react";

// {
//       id: 3,
//       jobTitle: "Software Engineer",
//       company: "Tech Solutions Inc.",
//       city: "Cityville",
//       startDate: "2020-06-01",
//       endDate: "2022-05-30",
//       description:
//         "Developed web applications and collaborated with cross-functional teams.",
//     },
function ProfessionalDisplay(props) {
  return (
    <>
      <div className="entry">
        <div className="cv-jobTitle-company">
          <p className="jobTitle">{props.element.jobTitle}</p>
          <p className="company">{props.element.company}</p>
        </div>
        <div className="cv-dates">
          <p className="startDatePro">{props.element.startDate}</p>
          <p className="endDatePro">{props.element.endDate}</p>
        </div>
        <div className="cv-mainTasks">
          <p className="mainTasks">{props.element.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProfessionalDisplay;
