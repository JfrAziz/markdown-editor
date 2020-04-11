import React, {useContext} from 'react'
import FileSaver from 'file-saver';
import MarkdownContext from 'helpers/MarkdownContext';
import {FIDownload} from 'icons/Icon'
import 'components/Header.scss'

const Header = () => {
  const {markdown, fileName, setFileName} = useContext(MarkdownContext)
  const Download = () => {
    var blob = new Blob([markdown], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName || "New Document.md");
  }
  return (
    <header>
      <div className="header-left">
        <label>DOCUMENT NAME</label>
        <div className="document-name">
          <input 
            type="text" 
            value={fileName} 
            placeholder={"Your File"}
            onChange={event => setFileName(event.target.value)}
            maxLength={100} />
        </div>
      </div>
      <div className="header-right">
        <nav>
            <button onClick={()=>Download()}>
              <FIDownload/>
              <span>Download Markdown</span>
            </button>
        </nav>
      </div>
    </header>
  )
}

export default Header