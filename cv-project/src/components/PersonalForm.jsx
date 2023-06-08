import React from "react";

export const PersonalForm = () => {
  return (
    <form>
      <div className="personal-grid">
        <div>
          <label htmlFor="first-name">First Name </label>
          <input type="text" id="first-name" />
        </div>
        <div>
          <label htmlFor="last-name">Last Name </label>
          <input type="text" id="last-name" />
        </div>
        <div>
          <label htmlFor="email">Email address </label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="mobile">Phone number</label>
          <input type="tel" id="mobile" />
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
