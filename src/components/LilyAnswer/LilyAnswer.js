import React, { Component } from 'react';
import './LilyAnswer.css';

class LilyAnswer extends Component {
  showAnswer = (index) => {
    const arrH4 = document.querySelectorAll('.one-question h4');
    const arrP = document.querySelectorAll('.one-question p');
    for (let i = 0; i < arrP.length; i++){
      if (i !== index) {
        arrP[i].classList.remove('show-answer');
        arrH4[i].classList.remove('color-answer');
        arrP[i].classList.remove('color-answer');
      }
    }
    arrH4[index].classList.toggle('color-answer');
    arrP[index].classList.toggle('show-answer');
    arrP[index].classList.toggle('color-answer');
  }
  render() {
    const { index, answer } = this.props;
    return (
      <div className="one-question">
        <h4 onClick={() => this.showAnswer(index)}><i className={answer.iClassName}></i>{answer.h4Name}</h4>
      <p>{answer.pName}</p>
      </div>
    );
  }
}

export default LilyAnswer;
