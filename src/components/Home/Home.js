import React, { Component } from "react";
import "./Home.css";
import Typed from 'react-typed';

class Home extends Component {


  render() {
    return (
      <div className="home">
        <div className="bg-home">
          <div className="container container-home text-white text-center">
            <p>Hello, my name is Duc</p>
            <h1><Typed strings={["I'm a Developer !", "I'm a Intern FE !", "I'm a Designer !"]} typeSpeed={130} backSpeed={130} loop /></h1>
            <p>
              I'm a Internship Front-End Web Developer with experience for over
              6 months
              <br />
              My expertise is to create and design Websites
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
