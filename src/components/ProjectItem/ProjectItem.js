import React, { Component } from "react";
import "./ProjectItem.css";

class ProjectItem extends Component {
  render() {
    let { name, src, category, bgCategory, href } = this.props;
    return (
      <div className="one-project text-white">
        <div className="bg-project"></div>
        <img src={src} alt="project" />
        <span style={{ backgroundColor: `${bgCategory}` }}>{category}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title="See detail"
        >
          {name}
        </a>
      </div>
    );
  }
}

export default ProjectItem;
