import React, { Component } from "react";
import "./Profile.css";
import imgProfile from "./profile.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container container-profile">
          <div className="row">
            <div className="col-sm-4">
              <img src={imgProfile} className="img-profile" alt="profile" />
            </div>
            <div className="col-sm-8">
              <p>
                <i className="fas fa-user-circle mr-2"></i> Nguyen Hong Duc
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i> autoclickvn@gmail.com
              </p>
              <p>
                <i className="fas fa-birthday-cake mr-2"></i> 11/12/1999
              </p>
              <p>
                <i className="fas fa-home mr-2"></i> Thanh Thuy, Phu Tho
              </p>
              <p>
                <i className="fas fa-graduation-cap mr-2"></i> University of
                Transport and Communications
              </p>
              <p>
                <i className="fas fa-star mr-2"></i> Information Technology
              </p>
            </div>
          </div>
          <div className="col-sm-10 time-line">
            <table className="table-time">
              <thead></thead>
              <tbody>
                <tr>
                  <td>2004 - 2009</td>
                  <td>Bao Yen primary school</td>
                </tr>
                <tr>
                  <td>2009 - 2013</td>
                  <td>Thanh Thuy secondary school</td>
                </tr>
                <tr>
                  <td>2013 - 2016</td>
                  <td>Thanh Thuy high school</td>
                </tr>
                <tr>
                  <td>2017 - Now</td>
                  <td>University of Transport and Communications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
