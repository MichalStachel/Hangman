import React from 'react';
import './App.css';

const Items = (props) => {
  const wordSplit = props.word.split('');
  console.log(wordSplit)
  const board = wordSplit.map(letter => {
    let letterState = <span className='border'>{letter}</span>;
    if (props.rightGuess.includes(letter)) {
      letterState = letter
    } return letterState

  })

  return (
    <>
      <h6>Right guess:</h6>
      <p className='ltrSpace'><strong>{board} {wordSplit.lenght}</strong></p>
    </>
  );
}

export default Items;
