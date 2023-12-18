import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
export default function GeneralInfoForm(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  function nameRefSet(e) {
    nameRef.current.value = e.target.value;
  }
  function emailRefSet(e) {
    emailRef.current.value = e.target.value;
  }
  function phoneRefSet(e) {
    phoneRef.current.value = e.target.value;
  }
  function cityRefSet(e) {
    cityRef.current.value = e.target.value;
  }
  function setForm() {
    const generalInfoObjid = uuidv4();
    const generalInfoObj = {
      id: generalInfoObjid,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      city: cityRef.current.value,
      form: "GeneralInfo",
    };
    props.saveInput(generalInfoObj);
  }

  return (
    <>
      <div className="input-container">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          ref={nameRef}
          name="fullName"
          placeholder="Enter your full name"
          id="fullName"
          defaultValue=""
          onChange={nameRefSet}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          ref={emailRef}
          name="email"
          placeholder="Email"
          id="email"
          defaultValue=""
          onChange={emailRefSet}
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          ref={phoneRef}
          name="phone"
          placeholder="Phone"
          id="phone"
          defaultValue=""
          onChange={phoneRefSet}
        />
      </div>
      <div className="input-container">
        <label htmlFor="address">City and province</label>
        <input
          type="text"
          ref={cityRef}
          name="address"
          placeholder="City, Province"
          id="address"
          defaultValue=""
          onChange={cityRefSet}
        />
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
    </>
  );
}
