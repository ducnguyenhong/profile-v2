import React, { Component } from 'react';
import './ContactBarItem.css';
import cloud from './cloud.png';

class ContactBarItem extends Component {

  showContact = (index) => {
    const arrBuble = document.getElementsByClassName('buble-cloud');
    arrBuble[index].classList.toggle('visiable');
  }

  render() {
    const { contact, index } = this.props;
    return (
      <div className="contact-bar-one">
        <img src={contact.src} alt="" className="contact-bar-logo" onClick={() => this.showContact(index)}/>
        <div className="buble-cloud">
          <img src={cloud} alt =""/>
          <a href={contact.href} target="_blank" rel="noopener noreferrer">{contact.contactName}</a>
        </div>
      </div>
    );
  }
}

export default ContactBarItem;
