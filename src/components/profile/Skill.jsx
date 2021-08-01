import React from "react";

// functional component skills

let Skill = props => (
  <div className="skills">
    <h3>Skills :</h3>
    <ul>
      <li>{props.skill1}</li>
      <li>{props.skill2}</li>
      <li>{props.skill3}</li>
    </ul>
  </div>
);

export default Skill;
