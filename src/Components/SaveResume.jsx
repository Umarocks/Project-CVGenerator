import JsPDF from "jspdf";
import React from "react";

function SaveResume() {
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#displayContainer")).then(() => {
      report.save("report.pdf");
    });
  };
  return (
    <div className="SaveResumeContainer">
      <div className="SaveResumeContainerHeader">
        <i>Save Your Resume</i>
      </div>
      <div className="DownloadBtn">
        <button className="DownloadBtn" onClick={generatePDF} type="button">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
              className="svg-download"
            >
              <path
                fill="currentColor"
                d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z"
              ></path>
            </svg>
            Download
          </span>
        </button>
      </div>
    </div>
  );
}

export default SaveResume;
