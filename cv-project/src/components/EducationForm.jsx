import React from "react";

export const EducationForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="personal-grid">
        <div>
          <label htmlFor="school-name">School </label>
          <input type="text" id="school-name" />
        </div>
        <div>
          <label htmlFor="study-title">Qualification/Degree</label>
          <input type="text" id="study-title" />
        </div>
        <div>
          <label htmlFor="study-start">Start</label>
          <input type="date" id="study-start" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
