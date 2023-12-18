import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ProfessionalExperience from "./Components/ProfessionalExperience";
import CVGenerator from "./Components/CVGenerator";
import SaveResume from "./Components/SaveResume";
import Display from "./Components/Display";
function App() {
  const [generalInfoForm, setGeneralInfoForm] = useState("");
  const [educationInfoForm, setEducationInfoForm] = useState([]);
  const [professionalInfoForm, setProfessionalInfoForm] = useState([]);
  const [generalEmpty, setGeneralEmpty] = useState(true);
  const [educationEmpty, setEducationEmpty] = useState(true);
  const [professionalEmpty, setProfessionalEmpty] = useState(true);

  function saveInput(obj) {
    switch (obj.form) {
      case "GeneralInfo":
        setGeneralInfoForm(obj);
        console.log(generalInfoForm);
        setGeneralEmpty(false);
        break;
      case "EducationInfo":
        const x = [...educationInfoForm, obj];
        setEducationInfoForm(x);
        console.log(educationInfoForm);
        setEducationEmpty(false);
        break;
      case "ProfessionalInfo":
        const y = [...professionalInfoForm, obj];
        setProfessionalInfoForm(y);
        console.log(professionalInfoForm);
        setProfessionalEmpty(false);
        break;
    }
  }

  return (
    <>
      <div className="container">
        <div className="Cv">
          <CVGenerator />
        </div>
        <div className="InputAndDisplay">
          <div className="Input">
            <div className="SaveResume">
              <SaveResume />
            </div>
            <GeneralInfo saveInput={saveInput} />
            <EducationInfo saveInput={saveInput} />
            <ProfessionalExperience saveInput={saveInput} />
          </div>
          <div className="Display">
            {(!generalEmpty || !educationEmpty || !professionalEmpty) && (
              <Display
                generalInfoForm={generalInfoForm}
                professionalInfoForm={professionalInfoForm}
                educationInfoForm={educationInfoForm}
                generalEmpty={generalEmpty}
                educationEmpty={educationEmpty}
                professionalEmpty={professionalEmpty}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
