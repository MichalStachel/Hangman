import React, { Component } from 'react';
import './App.css';
import Items from './Items.jsx';
import HangMan from './HangManImg.jsx';
import words from './Words.js';

class App extends Component {
  state = {
    letterKey: '',
    letter: '',
    secLetter: '',
    word: '',
    draw: 0,
    letters: 0,
    separatedLettersRight: [],
    separatedLettersWrong: [],
  }

  componentDidMount() {


    document.addEventListener('keydown', (e) => {
      this.setState({
        letterKey: e.key,
      })
    })

    document.addEventListener('keyup', () => {
      this.setState({
        letter: this.state.word.indexOf(this.state.letterKey),
        secLetter: this.state.word.lastIndexOf(this.state.letterKey)
      })
      // Bad guess
      if (this.state.separatedLettersWrong.includes(this.state.letterKey) === true && this.state.letter === -1) {
        return;
      } else {
        if (this.state.letter === -1) {
          let separatedLettersWrong = [...this.state.separatedLettersWrong];
          separatedLettersWrong.push(this.state.letterKey);
          this.setState(() => ({
            separatedLettersWrong
          }))
          console.log(this.state.letter, this.state.secLetter);
        }
      }

      // Right guess
      if (this.state.separatedLettersRight.includes(this.state.letterKey) === true && this.state.letter !== -1) {
        return;
      } else {
        if (this.state.letter !== -1) {
          let separatedLettersRight = [...this.state.separatedLettersRight];
          separatedLettersRight.push(this.state.letterKey)
          if (this.state.secLetter !== -1 && this.state.secLetter !== this.state.letter) { separatedLettersRight.push(this.state.letterKey) }
          this.setState({
            separatedLettersRight
          })
        }
      }
    })
    this.randomWord();
  }


  componentDidUpdate() {
    if (this.state.separatedLettersRight.length === this.state.word.length) {
      alert(`You Win!!!
      The word is ${this.state.word}`)
      this.randomWord();
    }
    if (this.state.separatedLettersWrong.length === 8) {
      alert(`
  The word was ${this.state.word}
  Try again ;)`)
      this.randomWord();
    }

  }


  randomWord = () => {
    console.log()
    const randomNumber = Math.floor(Math.random() * words.length);
    const word = words[this.state.draw]
    this.setState({
      draw: randomNumber,
      word,
      letters: words[this.state.draw].length,
      separatedLettersRight: [],
      separatedLettersWrong: [],
    })
  }

  render() {
    const { separatedLettersWrong } = this.state;

    return (
      <div className='App'>
        <HangMan arrayWrong={this.state.separatedLettersWrong} />
        <div  className='mrgDown'>
          <button onClick={this.randomWord} className='btn'>Draw new word</button>
          <h6>Wrong guess:</h6>
          <p className='ltrSpace'>{separatedLettersWrong}</p>
          <Items word={this.state.word} rightGuess={this.state.separatedLettersRight} />
        </div>
      </div>
    );
  }
}

export default App;