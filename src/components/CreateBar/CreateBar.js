import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import create from './icon-create.png';
import download from './icon-download.png';
import lily from './icon-lily.png';
import version1 from './icon-v1.png';
import tet from './icon-tet.png';
import './CreateBar.css';
import NHDpdf from './Nguyen_Hong_Duc.pdf';

class CreateBar extends Component {
  showCreateBar = () => {
    document.getElementById("create-bar-content").classList.toggle("show-create-bar");
    document.getElementById("create-bar-logo").classList.toggle("rotate-create-bar");
  }

  render() {
    return (
      <div className="create-bar">
        <img src={create} alt="" className="create-bar-logo" id="create-bar-logo" onClick={this.showCreateBar} />
        <div className="create-bar-content" id="create-bar-content">
          <a href="https://autoclickvn.github.io/profile-v1/" rel="noopener noreferrer" target="_blank"><img src={version1} alt="version 1.0" title="Version 1.0" /></a>
          <a href="https://autoclickvn.github.io/count-down-tet-holiday/" rel="noopener noreferrer" target="_blank"><img src={tet} alt="Countdown Tet" title="Countdown Tet" /></a>
          <Link to="/lily-bot" className="lily-bot"><img src={lily} alt="lily" title="Lily BOT" /></Link>
          <a href={NHDpdf} download={NHDpdf}><img src={download} alt="download" title="Download PDF" /></a>
        </div>
      </div>
    );
  }
}

export default CreateBar;
