import React, { useState } from "react";

export const PracticalForm = () => {
  const [formVisible, setFormVisible] = useState(false);

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
            <input type="text" id="company" />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" />
          </div>
          <div>
            <label htmlFor="email"> </label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="mobile">Phone number</label>
            <input type="tel" id="mobile" />
          </div>
          <div>
            <label htmlFor="email">Description</label>
            <input type="email" id="email" />
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
