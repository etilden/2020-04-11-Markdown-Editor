import React from 'react';
import CodeMirror from 'react-codemirror';
// import './codeEditor.css'
import 'codemirror/lib/codemirror.css';

function CodeEditor(props) {
  var options = {
    lineNumbers: true
  };
  return (
    <CodeMirror value={props.code} onChange={props.updateCode} options={options} />
  )
}

export default CodeEditor
