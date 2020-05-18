import React, { Component } from 'react';
import phone from './icon-phone.png';
import facebook from './icon-facebook.png';
import instagram from './icon-instagram.png';
import youtube from './icon-youtube.png';
import github from './icon-github.png';
import './ContactBar.css';
import ContactBarItem from '../ContactBarItem/ContactBarItem';

class ContactBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          src: facebook,
          href: 'https://facebook.com/ducnh99',
          contactName: 'Nguyễn Đức'
        },
        {
          src: phone,
          href: '/',
          contactName: '0376876191'
        },
        {
          src: instagram,
          href: 'https://www.instagram.com/autoclickvn',
          contactName: 'Nguyễn Đức'
        },
        {
          src: youtube,
          href: 'https://www.youtube.com/c/ProtonEsports',
          contactName: 'PRT Studio'
        },
        {
          src: github,
          href: 'https://github.com/autoclickvn',
          contactName: 'autoclickvn'
        }
      ]
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="contact-bar">
        {contacts.map((contact, index) => {
          return <ContactBarItem key={index} contact={contact} index={index} />
        })}
      </div>
    );
  }
}

export default ContactBar;
