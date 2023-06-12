import React, { useState } from "react";
import { PersonalForm } from "./PersonalForm";
import { EducationForm } from "./EducationForm";
import { PracticalForm } from "./PracticalForm";
import { CVDisplay } from "./CVDisplay";

export const Main = (props) => {
  const [visibility, setVisibility] = useState(false);

  const onPreviewPress = () => {
    setVisibility(!visibility);
  };
  return (
    <main>
      {!visibility ? (
        <>
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
              <button onClick={onPreviewPress}>Preview</button>
              <button>Save</button>
            </div>
          </div>
        </>
      ) : (
        <CVDisplay
          personal={props.personal}
          education={props.education}
          practical={props.practical}
          changeBack={onPreviewPress}
        />
      )}
    </main>
  );
};
