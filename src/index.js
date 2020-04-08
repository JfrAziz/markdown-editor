import React from "react";
import ReactDom from "react-dom";
import TextEditor from "components/TextEditor";
import MarkdownPreview from "components/MarkdownPreview";
import { MarkdownProvider } from "helpers/MarkdownContext";

const App = () => {
  return (
    <MarkdownProvider>
      <TextEditor/>
      <MarkdownPreview/>
    </MarkdownProvider>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
