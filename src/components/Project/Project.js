import React, { Component } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import pjWeather from "./pj-weather.png";
import pjInsurlife from "./pj-insurlife.png";
import pjModulo from "./pj-modulo.png";
import pjQlcv from "./pj-qlcv.png";
import pjQlsp from "./pj-qlsp.png";
import pjSoftviet from "./pj-softviet.png";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="container container-project">
          <div className="col-sm-12 text-center col-title-site-2">
            <h3 className="title-site">Projects</h3>
          </div>
          <ProjectItem
            name="SoftViet Home"
            src={pjSoftviet}
            category="TEMPLATE"
            bgCategory="#0A8CC1"
            href="https://autoclickvn.github.io/template-softviet/"
          />
          <ProjectItem
            name="Insurlife Home"
            src={pjInsurlife}
            category="TEMPLATE"
            bgCategory="#0A8CC1"
            href="https://autoclickvn.github.io/template-insurlife/"
          />
          <ProjectItem
            name="Thời tiết online"
            src={pjWeather}
            category="REACT APP"
            bgCategory="#0A8CC1"
            href="http://thoitiet.online"
          />
          <ProjectItem
            name="Modulo Tool"
            src={pjModulo}
            category="REACT APP"
            bgCategory="#0A8CC1"
            href="http://modulotool.online"
          />
          <ProjectItem
            name="Work Managament"
            src={pjQlcv}
            category="REACT APP"
            bgCategory="#0A8CC1"
            href="http://react-app-1.epizy.com/"
          />
          <ProjectItem
            name="Product Managament"
            src={pjQlsp}
            category="REACT APP"
            bgCategory="#0A8CC1"
            href="http://autoclickvn.epizy.com/"
          />
        </div>
      </div>
    );
  }
}

export default Project;
