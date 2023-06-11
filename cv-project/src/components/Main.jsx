import React from "react";
import { PersonalForm } from "./PersonalForm";
import { EducationForm } from "./EducationForm";
import { PracticalForm } from "./PracticalForm";

export const Main = (props) => {
  return (
    <main>
      <div className="main-container">
        <div className="forms">
          <PersonalForm
            personal={props.personal}
            setPersonal={props.setPersonal}
          />
          <EducationForm
            education={props.education}
            setEducation={props.setEducation}
          />
          <PracticalForm
            practical={props.practical}
            setPractical={props.setPractical}
          />
        </div>
        <div className="preview">
          <button>Preview</button>
          <button>Save</button>
        </div>
      </div>
    </main>
  );
};
