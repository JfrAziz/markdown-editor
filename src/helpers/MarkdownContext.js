import React, {createContext, useState} from 'react'

const MarkdownContext = createContext()

const MarkdownProvider = (props) => {
  const [markdown, setMarkdown] = useState("")
  return(
    <MarkdownContext.Provider value={{markdown: markdown, setMarkdown: setMarkdown}}>
      {props.children}
    </MarkdownContext.Provider>
  )
}

export {MarkdownProvider}
export default MarkdownContext