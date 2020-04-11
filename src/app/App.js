import React from 'react'
import TextEditor from "components/TextEditor";
import MarkdownPreview from "components/MarkdownPreview";
import Header from 'components/Header'
import { MarkdownProvider } from "helpers/MarkdownContext";
import "app/App.scss"

const MarkdownContainer = (props) => (
  <div className={"markdown-container "+props.type}>
    <div className="markdown-label" >
      {props.type}
    </div>
    <div className={"markdown-wrapper "+props.type}>
      {props.children}
    </div>
  </div>
)


const App = () => {
  return (
    <MarkdownProvider>
      <div className="container">
        <Header/>
        <div className="editor-container">
          <MarkdownContainer type="editor">
            <TextEditor/>
          </MarkdownContainer>
          <MarkdownContainer type="preview">
            <MarkdownPreview/>
          </MarkdownContainer>
        </div>
      </div>
    </MarkdownProvider>
  );
};

export default App