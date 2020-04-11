import React, { useContext } from "react";
import MarkdownContext from "helpers/MarkdownContext";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import 'components/theme/text-editor.scss'

const TextEditor = () => {
  const {markdown, setMarkdown} = useContext(MarkdownContext)
  return <AceEditor
          mode="markdown"
          theme="textmate"
          value={markdown}
          wrapEnabled={true}
          onChange={setMarkdown}
          showPrintMargin={false}
          width={"100%"}
          height={"100%"}
        />
}

export default TextEditor