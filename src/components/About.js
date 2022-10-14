import React from "react";

function hasBio(bio) {
  if (!bio) {
    return "";
  } else {
    return <p>{bio}</p>;
  }
}
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {hasBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;