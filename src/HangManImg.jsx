import React from 'react';
import './App.css';
import HM1 from './imgs/hangman2.png';
import HM2 from './imgs/hangman3.png';
import HM3 from './imgs/hangman4.png';
import HM4 from './imgs/hangman5.png';
import HM5 from './imgs/hangman6.png';
import HM6 from './imgs/hangman7.png';
import HM7 from './imgs/hangman8.png';
import HM8 from './imgs/hangman.png';

const hangman = (props) => {
  const arr = props.arrayWrong.length;
  let img = {}

  switch (arr) {
    case 0:
      img = HM1;
      break;
    case 1:
      img = HM2;
      break;
    case 2:
      img = HM3;
      break;
    case 3:
      img = HM4;
      break;
    case 4:
      img = HM5;
      break;
    case 5:
      img = HM6;
      break;
    case 6:
      img = HM7;
      break;
    case 7:
      img = HM8;
      break;
    default:
  }
  return (
    <><img src={img} alt="" className='img' /></>
  );
}

export default hangman;