import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    letterKey: '',
    letter: '',
    secLetter: '',
    words: ["home", "accurate", "deliver", "bear", "rice", "cooperative", "raise", "pray", "parent", "grudge", "mouse", "teacher", "accident", "dance", "vegetarian", "basin", "craftsman", "firm", "muscle", "toll"],
    word: '',
    draw: 0,
    letters: 0,
    separatedLettersRight: [],
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

      if (this.state.letter === -1) {
        let separatedLettersWrong = [...this.state.separatedLettersWrong];
        separatedLettersWrong.push(this.state.letterKey);
        this.setState({
          separatedLettersWrong
        })
        console.log(this.state.letter, this.state.secLetter);
      } else if (this.state.letter !== -1) {
        let separatedLettersRight = [...this.state.separatedLettersRight];
        separatedLettersRight.push(this.state.letterKey)
        this.setState({
          separatedLettersRight
        })
      }

    })


    this.randomWord();
  }


  randomWord = () => {
    const randomNumber = Math.floor(Math.random() * this.state.words.length);
    this.setState({
      draw: randomNumber,
      word: this.state.words[this.state.draw],
      letters: this.state.words[this.state.draw].length,
      separatedLettersRight: [],
      separatedLettersWrong: [],
    })
  }

  render() {
    const { word, separatedLettersWrong } = this.state;
    return (
      <div className='App'>
        <button onClick={this.randomWord}>Draw a word</button>
        <p>{separatedLettersWrong}</p>
        <p>{word}</p>
      </div>
    );
  }
}

export default App;