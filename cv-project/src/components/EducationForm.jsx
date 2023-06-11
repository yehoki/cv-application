import React, { useState } from "react";

export const EducationForm = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  class educationObject {
    constructor(school, qualification, startDate, endDate) {
      this.school = school;
      this.qualification = qualification;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  }
  const [school, setSchool] = useState("");
  const [qualification, setQualification] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
    console.log(school, qualification, startDate, endDate);
    props.setEducation([
      ...props.education,
      new educationObject(school, qualification, startDate, endDate),
    ]);
    console.log(props.education);
    setSchool("");
    setQualification("");
    setStartDate("");
    setEndDate("");
  };
  const handleAddFormButton = (e) => {
    setFormVisible(!formVisible);
    console.log(props.education);
  };

  const hideWhenVisible = { display: formVisible ? "none" : "" };
  const showWhenVisible = { display: formVisible ? "" : "none" };
  return (
    <div>
      <form style={showWhenVisible} onSubmit={handleFormSubmit}>
        <div className="personal-grid">
          <div>
            <label htmlFor="school-name">School </label>
            <input
              required
              value={school}
              onChange={(event) => setSchool(event.target.value)}
              type="text"
              id="school-name"
            />
          </div>
          <div>
            <label htmlFor="study-title">Qualification</label>
            <input
              value={qualification}
              onChange={(event) => setQualification(event.target.value)}
              type="text"
              id="study-title"
            />
          </div>
          <div>
            <label htmlFor="study-start">Start</label>
            <input
              required
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              type="date"
              id="study-start"
            />
          </div>
          <div>
            <label htmlFor="study-end">Start</label>
            <input
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              type="date"
              id="study-end"
              required
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem",
          }}
        >
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="show-form" style={hideWhenVisible}>
        <button onClick={handleAddFormButton}>Add Education information</button>
      </div>
    </div>
  );
};
