import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from './codeEditor';
import Converter from './converter'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      code: '// Code'
    }
    this.updateCode = this.updateCode.bind(this)
  }

  updateCode = (newCode) => {
		this.setState({
			code: newCode,
		});
	} 
  render() {
    return (
      <div class = "row">
        <div class = "col"><CodeEditor updateCode = {this.updateCode} code = {this.state.code}/></div>
        <div class = "col"><Converter code = {this.state.code} /></div>
      </div>
    );
  }
}

export default App;
