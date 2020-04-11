import React from 'react';
import './App.css';
import CodeEditor from './codeEditor';
import Converter from './converter'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      code: '// Code',
      words: 2,
      chars: 7
    }
    this.updateCode = this.updateCode.bind(this)
  }

  updateCode = (newCode) => {
    let words = 0; 
    if (newCode) {
      words = newCode.split(' ').length
    }
		this.setState({
			code: newCode, chars: newCode.length, words
		});
	} 
  render() {
    return (
      <div className = "whole">
        <h1 className = "App-header">Code Converter</h1>
        <div className = "additional-info">
          <p>{this.state.words} words</p>
          <p>{this.state.chars} characters</p>
        </div>
        <div className = "row">
          <div className = "col"><CodeEditor updateCode = {this.updateCode} code = {this.state.code}/></div>
          <div className = "col"><Converter code = {this.state.code} /></div>
        </div>
      </div>
    );
  }
}

export default App;
