import React from "react";

export const CVDisplay = (props) => {
  const educationDivs = props.education.map((edu) => {
    return (
      <div key={edu.school}>
        <p>School: {edu.school}</p>
        <p>Qualification: {edu.qualification}</p>
        <p>From: {edu.startDate} </p>
        <p>To: {edu.endDate}</p>
      </div>
    );
  });

  const practicalDivs = props.practical.map((exp) => {
    return (
      <div key={exp.company}>
        <p>
          {exp.position} at {exp.company}
        </p>
        <p>Description: {exp.responsibilites}</p>
        <p>From: {exp.startDate}</p>
        <p>To: {exp.endDate}</p>
      </div>
    );
  });

  console.log(props.practical, practicalDivs);

  return (
    <div className="main-container display">
      <div className="name">
        <h2>
          {props.personal.firstName} {props.personal.lastName}
        </h2>
        <div>
          <p>Email: {props.personal.email}</p>
          <p>Phone: {props.personal.phoneNumber}</p>
        </div>
      </div>

      <div>
        <h3>Education</h3>
        {educationDivs}
      </div>
      <div>
        <h3>Experience</h3>
        {practicalDivs}
      </div>
      <button onClick={props.changeBack}>Go back</button>
    </div>
  );
};
