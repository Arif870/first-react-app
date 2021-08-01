import React from "react";

//functionla component bio

let Bio = props => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.title}</p>
    <hr />
  </div>
);
export default Bio;
