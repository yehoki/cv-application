import React, { useState } from "react";

export const PersonalForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.setPersonal({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    console.log(props.personal);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="personal-grid">
        <div>
          <label htmlFor="first-name">First Name </label>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            id="first-name"
            required
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name </label>
          <input
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            id="last-name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address </label>
          <input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="mobile">Phone number</label>
          <input
            required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            type="tel"
            id="mobile"
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
  );
};
