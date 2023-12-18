import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function EducationForm(props) {
  const degreeRef = useRef();
  const schoolRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
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
  function degreeRefSet(e) {
    degreeRef.current.value = e.target.value;
  }
  function schoolRefSet(e) {
    schoolRef.current.value = e.target.value;
  }
  function countryRefSet(e) {
    countryRef.current.value = e.target.value;
  }
  function cityRefSet(e) {
    cityRef.current.value = e.target.value;
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
    const educationFormObj = {
      id: id,
      degree: degreeRef.current.value,
      school: schoolRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
      startDate: startDate,
      endDate: endDate,
      form: "EducationInfo",
    };
    props.saveInput(educationFormObj);
  }
  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            ref={degreeRef}
            name="degree"
            placeholder="Enter Degree / Field of Study"
            id="degree"
            defaultValue=""
            onChange={degreeRefSet}
          />
        </div>
        <div className="input-container">
          <label htmlFor="school">School</label>
          <input
            type="text"
            ref={schoolRef}
            name="school"
            placeholder="Enter school / university"
            id="school"
            defaultValue=""
            onChange={schoolRefSet}
          />
        </div>
        <div className="input-container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            ref={cityRef}
            name="city"
            placeholder="Enter City"
            id="city"
            defaultValue=""
            onChange={cityRefSet}
          />
        </div>
        <div className="input-container">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            ref={countryRef}
            name="country"
            placeholder="Enter Country"
            id="country"
            defaultValue=""
            onChange={countryRefSet}
          />
        </div>
        <div className="input-dates">
          <div className="input-container">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              ref={startDateRef}
              name="startDate"
              placeholder="mm / dd / yy"
              id="startDate"
              defaultValue=""
              onChange={startDateRefSet}
            />
          </div>
          <div className="input-container">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              ref={endDateRef}
              name="endDate"
              placeholder="mm / dd / yy"
              id="endDate"
              defaultValue=""
              onChange={endDateRefSet}
            />
          </div>
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

export default EducationForm;
