import React from "react";
import { PersonalForm } from "./PersonalForm";
import { EducationForm } from "./EducationForm";
import { PracticalForm } from "./PracticalForm";

export const Main = () => {
  return (
    <main>
      <div className="main-container">
        <PersonalForm />
        <EducationForm />
        <PracticalForm />
      </div>
    </main>
  );
};
