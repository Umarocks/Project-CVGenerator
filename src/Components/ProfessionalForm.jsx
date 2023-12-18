import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ProfessionalForm(props) {
  const jobTitleRef = useRef();
  const companyRef = useRef();
  const descriptionRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  function dateChange(date) {
    const dateObj = new Date(date);
    const monthInWrds = new Intl.DateTimeFormat("en", {
      month: "short",
    }).format(dateObj);
    const year = dateObj.getFullYear();
    const result = monthInWrds + " " + year;
    return result;
  }
  function jobTitleRefSet(e) {
    jobTitleRef.current.value = e.target.value;
  }
  function companyRefSet(e) {
    companyRef.current.value = e.target.value;
  }
  function descriptionRefSet(e) {
    descriptionRef.current.value = e.target.value;
  }

  function startDateRefSet(e) {
    startDateRef.current.value = e.target.value;
    setStartDate(dateChange(e.target.value));
  }
  function endDateRefSet(e) {
    endDateRef.current.value = e.target.value;
    setEndDate(dateChange(e.target.value));
  }

  function setForm() {
    const id = uuidv4();
    const professionalFormObj = {
      id: id,
      jobTitle: jobTitleRef.current.value,
      company: companyRef.current.value,
      description: descriptionRef.current.value,
      startDate: startDate,
      endDate: endDate,
      form: "ProfessionalInfo",
    };
    props.saveInput(professionalFormObj);
  }
  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            ref={jobTitleRef}
            name="jobTitle"
            placeholder="Enter Job Title"
            id="jobTitle"
            defaultValue=""
            onChange={jobTitleRefSet}
          />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            ref={companyRef}
            name="company"
            placeholder="Enter Company"
            id="company"
            defaultValue=""
            onChange={companyRefSet}
          />
        </div>
        <div className="input-dates">
          <div className="input-container">
            <label htmlFor="startDatePro">Start Date</label>
            <input
              type="date"
              ref={startDateRef}
              name="startDatePro"
              placeholder="mm / dd / yy"
              id="startDatePro"
              defaultValue=""
              onChange={startDateRefSet}
            />
          </div>
          <div className="input-container">
            <label htmlFor="endDatePro">End Date</label>
            <input
              type="date"
              ref={endDateRef}
              name="endDatePro"
              placeholder="mm / dd / yy"
              id="endDatePro"
              defaultValue=""
              onChange={endDateRefSet}
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="mainTasks">Description</label>
          <textarea
            name="mainTasks"
            ref={descriptionRef}
            placeholder="Main tasks"
            id="mainTasks"
            onChange={descriptionRefSet}
          ></textarea>
        </div>
        <div className="form-buttons">
          <span></span>
          <button
            className="save-form"
            type="button"
            disabled=""
            onClick={setForm}
          >
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="svg-right"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
              </svg>{" "}
              <span></span>Save
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfessionalForm;
