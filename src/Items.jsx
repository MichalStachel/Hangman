import React from 'react';
import './App.css';

const Items = (props) => {
  const wordSplit = props.word.split('');
  console.log(wordSplit)
  const board = wordSplit.map(letter => {
    let letterState = '|_|';
    if (props.rightGuess.includes(letter)) {
      letterState = letter
    } return letterState

  })

  return (
    <>
      Right:<p className='ltrSpace'><strong>{board} {wordSplit.lenght}</strong></p>
    </>
  );
}

export default Items;
