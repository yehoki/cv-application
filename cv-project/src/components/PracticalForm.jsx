import React, { useState } from "react";

export const PracticalForm = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  class practicalObject {
    constructor(company, position, responsibilites, startDate, endDate) {
      this.company = company;
      this.position = position;
      this.responsibilites = responsibilites;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
    props.setPractical([
      ...props.practical,
      new practicalObject(company, position, description, startDate, endDate),
    ]);
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const handleAddFormButton = (e) => {
    setFormVisible(!formVisible);
  };

  const hideWhenVisible = { display: formVisible ? "none" : "" };
  const showWhenVisible = { display: formVisible ? "" : "none" };
  return (
    <div>
      <form style={showWhenVisible} onSubmit={handleFormSubmit}>
        <div className="personal-grid">
          <div>
            <label htmlFor="company">Company</label>
            <input
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              type="text"
              id="company"
            />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input
              value={position}
              onChange={(event) => setPosition(event.target.value)}
              type="text"
              id="position"
            />
          </div>
          <div>
            <label htmlFor="work-start-date">Start Date</label>
            <input
              value={startDate}
              onChange={(event) => setStartDate(event.target.valuea)}
              type="date"
              id="work-start-date"
            />
          </div>
          <div>
            <label htmlFor="work-end-date">End Date</label>
            <input
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              type="date"
              id="work-end-date"
            />
          </div>
          <div className="span-two">
            <label htmlFor="job-description">Description</label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              id="job-description"
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
      <div style={hideWhenVisible} className="show-form">
        <button onClick={handleAddFormButton}>Add Practical information</button>
      </div>
    </div>
  );
};
