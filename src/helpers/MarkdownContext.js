import React, {createContext, useState} from 'react'

const MarkdownContext = createContext()

const MarkdownProvider = (props) => {
  const [markdown, setMarkdown] = useState("")
  const [fileName, setFileName] = useState("New Document.md")
  return(
    <MarkdownContext.Provider value={{
      markdown: markdown, 
      setMarkdown: setMarkdown,
      fileName: fileName,
      setFileName: setFileName
    }}>
      {props.children}
    </MarkdownContext.Provider>
  )
}

export {MarkdownProvider}
export default MarkdownContext