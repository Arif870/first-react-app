import React, { Component } from "react";

// components

import Bio from "./Bio";
import Skill from "./Skill";
import Social from "./Social";

class Profile extends Component {
  render() {
    let me = {
      name: "Arif-uz-zaman",
      title: "Full stack web developer. Wordpress expert and instructor",
    };
    let skills = {
      skill1: "JavaScript",
      skill2: "React",
      skill3: "Full stack development",
    };
    return (
      <div className="app">
        <Bio name={me.name} title={me.title} />

        <Skill
          skill1={skills.skill1}
          skill2={skills.skill2}
          skill3={skills.skill3}
        />
        <Social />
      </div>
    );
  }
}

export default Profile;
