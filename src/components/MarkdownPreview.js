import React, {useContext} from 'react'
import MarkdownContext from 'helpers/MarkdownContext';
import 'components/MarkdownStyle.css'
const marked = require('marked');

marked.setOptions({
  breaks: true,
  smartLists: true,
  tables: true,
})

const MarkdownPreview = () => {
  const {markdown} = useContext(MarkdownContext)
  return <div id="markdown-preview" dangerouslySetInnerHTML={{ __html : marked(markdown)}} />
}

export default MarkdownPreview
