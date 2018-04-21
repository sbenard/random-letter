import React, { Component } from 'react'
import './App.css'
import { generateLetter } from '../lib/generate-letter'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      current: '',
      history: [],
      upperCase: true
    }
  }

  render() {
    const { current, history, upperCase } = this.state

    const addLetter = () => {
      const current = generateLetter()
      this.setState({ current, history: this.state.history.concat([current]) })
    }

    const displayHistory = (letter, index, tab) =>
      index === tab.length - 1 ? (
        <u key={index}>{displayLetter(letter)}</u>
      ) : (
        <span key={index}>{displayLetter(letter)} </span>
      )

    const toggleUpperCase = ({ target }) => {
      this.setState({
        upperCase: target.checked
      })
    }

    const displayLetter = letter =>
      this.state.upperCase ? letter.toUpperCase() : letter

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random letters</h1>
        </header>
        <p>
          <label>
            Uppercase
            <input
              onChange={toggleUpperCase}
              type="checkbox"
              checked={upperCase}
            />
          </label>
        </p>
        <p>
          <button onClick={addLetter}>Random</button>
        </p>
        {current && (
          <div>
            <p className="App-intro">
              Current letter : {displayLetter(current)}
            </p>
            <p>History : {history.map(displayHistory)}</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
