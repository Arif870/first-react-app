import React, { Component } from "react";
import Profile from "./profile/Profile";
import Skill from "../components/profile/Skill";
import Bio from "../components/profile/Bio";
import Social from "../components/profile/Social";

class App extends Component {
  render() {
    let me = {
      name: "Sumaiya Akter",
      title: "Full stack developer",
    };
    let skills = {
      skill1: "Bootstrap",
      skill2: "Tailwind",
      skill3: "HTML5",
    };
    return (
      <div>
        <Profile />
        <div className="app">
          <Bio name={me.name} title={me.title} />

          <Skill
            skill1={skills.skill1}
            skill2={skills.skill2}
            skill3={skills.skill3}
          />
          <Social />
        </div>
      </div>
    );
  }
}
export default App;
