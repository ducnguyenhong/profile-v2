import React, { Component } from "react";
import "./SkillItem.css";

class SkillItem extends Component {
  render() {
    let { src, name, width, value, color } = this.props;

    return (
      <div className="one-skill">
        <img src={src} alt="skill" />
        <p style={{ color: `${color}` }}>{name}</p>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${width}`, backgroundColor: `${color}` }}
          />
        </div>
      </div>
    );
  }
}

export default SkillItem;
