import React, {useContext} from 'react'
import MarkdownContext from 'helpers/MarkdownContext';
import hljs from 'highlight.js/lib/core';
import 'components/theme/markdown.scss'
import 'components/theme/atom-one-dark.scss'
const marked = require('marked');

const languages = ['bash', 'css', 'javascript', 'json', 'java','go', 'php','plaintext'] 

languages.forEach((name)=>{
  const lang = require(`highlight.js/lib/languages/${name}`)
  hljs.registerLanguage(name, lang)
})

marked.setOptions({
  breaks: true,
  smartLists: true,
  tables: true,
  highlight: (code, language) => {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  }
})

const MarkdownPreview = () => {
  const {markdown} = useContext(MarkdownContext)
  return <div id="markdown-preview" dangerouslySetInnerHTML={{ __html : marked(markdown)}} />
}

export default MarkdownPreview
