import React from "react";
// import 'react-phone-number-input/style.css'
import { PhoneInput } from "react-phone-number-input";

export const PersonalForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="mobile">Phone number</label>
        <PhoneInput id="mobile" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
