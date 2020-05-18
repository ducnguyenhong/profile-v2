import React, { Component } from "react";
import "./Skill.css";
import lgHTML5 from "./logo-html5.png";
import lgCSS3 from "./logo-css3.png";
import lgBS4 from "./logo-bt4.png";
import lgJS from "./logo-js.png";
import lgJQ from "./logo-jq.png";
import lgPTS from "./logo-ps.png";
import lgRPS from "./logo-responsive.png";
import lgGIT from "./logo-git.png";
import lgReact from "./logo-react.png";
import SkillItem from "../SkillItem/SkillItem";

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <div className="container container-skill">
          <div className="col-sm-12 text-center col-title-site">
            <h3 className="title-site">Skills</h3>
          </div>
          <SkillItem
            src={lgHTML5}
            name="HTML5"
            color="#E44D26"
            width="60%"
            value={60}
          />
          <SkillItem
            src={lgCSS3}
            name="CSS3"
            color="#61B3E4"
            width="60%"
            value={60}
          />
          <SkillItem
            src={lgBS4}
            name="BOOTSTRAP4"
            color="#A572F2"
            width="60%"
            value={60}
          />
          <SkillItem
            src={lgJS}
            name="JS/ES6"
            color="#FDDD57"
            width="50%"
            value={50}
          />
          <SkillItem
            src={lgJQ}
            name="JQUERY"
            color="#2A90E2"
            width="40%"
            value={40}
          />
          <SkillItem
            src={lgReact}
            name="REACT/REDUX"
            color="#1EDDEA"
            width="35%"
            value={35}
          />
          <SkillItem
            src={lgPTS}
            name="PHOTOSHOP"
            color="#7762C1"
            width="50%"
            value={50}
          />
          <SkillItem
            src={lgRPS}
            name="RESPONSIVE"
            color="#6BDFE2"
            width="75%"
            value={75}
          />
          <SkillItem
            src={lgGIT}
            name="GIT/GITHUB"
            color="#A4A4A4"
            width="30%"
            value={30}
          />
        </div>
      </div>
    );
  }
}

export default Skill;
