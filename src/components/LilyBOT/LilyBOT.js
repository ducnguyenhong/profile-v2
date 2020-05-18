import React, { Component } from 'react';
import './LilyBOT.css';
import lilyImg from './liliana.png';
import LilyAnswer from '../LilyAnswer/LilyAnswer';
import Typed from 'react-typed';

class LilyBOT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [
        {
          iClassName: 'fas fa-question-circle mr-2',
          h4Name: 'Lily! Who are you?',
          pName: "My name's Liliana. I was created by Duc to help you find out his website better."
        },
        {
          iClassName: 'fas fa-question-circle mr-2',
          h4Name: 'How can I contact Duc?',
          pName: 'Take a look to the left, you can see his contact information.'
        },
        {
          iClassName: 'fas fa-question-circle mr-2',
          h4Name: 'I want to download his PDF of CV?',
          pName: 'Click on the green plus in the bottom corner of the website, he has the pdf file there.'
        },
        {
          iClassName: 'fas fa-heart mr-2',
          h4Name: 'And finally!',
          pName: "Thank you for visiting our website and don't forget my name (Lily)."
        }
      ]
    }
  }


  render() {
    const { answers } = this.state;
    return (
      <div className="lily-bot-home">
        <div className="container container-lily">
          <div className="lily-content">
            <div className="lily-header">
              <img src={lilyImg} alt="Lily BOT" />
              <h2><Typed strings={["Hello, I'm Lily!", "Can I help you ?"]} typeSpeed={120} backSpeed={120} loop /></h2>
            </div>
            <div className="lily-question">
              {answers.map((answer, index) => {
                return <LilyAnswer key={index} index={index} answer={answer}/>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LilyBOT;
