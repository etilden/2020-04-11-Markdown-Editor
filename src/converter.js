import React from 'react'
import MarkdownView from 'react-showdown'

export default function App(props) {
  const markdown = props.code;

  return (
    <MarkdownView
      markdown={markdown}
      options={{ tables: true, emoji: true }}
    />
  );
};