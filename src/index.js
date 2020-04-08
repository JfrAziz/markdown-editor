import React, { useState } from "react";
import ReactDom from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import './ace-custom-theme.css'
const marked = require('marked');

marked.setOptions({
  breaks: true,
  smartLists: true,
  tables: true,
})

const App = (props) => {
  const [markdown, setMarkdown] = useState("");
  return (
    <div>
      <AceEditor
        mode="markdown"
        theme="textmate"
        value={markdown}
        wrapEnabled={true}
        onChange={setMarkdown}
        width={"100%"}
      />
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}/>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
