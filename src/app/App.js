import React, {useState} from 'react'
import TextEditor from "components/TextEditor";
import MarkdownPreview from "components/MarkdownPreview";
import Header from 'components/Header'
import Modal from 'components/Modal'
import { FIMaximize, FIEye } from 'icons/Icon'
import { MarkdownProvider } from "helpers/MarkdownContext";
import "app/App.scss"

const MarkdownContainer = props => {
  const btnPreview = <button className="btn-preview" onClick={props.onPreview}><FIEye/></button>
  return (
    <div className={"markdown-container "+props.type}>  
      <div className="markdown-header">
        <div className="markdown-label">
          {props.type}
        </div>
        <button className="btn-maximize" onClick={props.onMaximize}>
          <FIMaximize/>
        </button>
        {props.type === 'editor' && btnPreview}
      </div>
      <div className={"markdown-wrapper "+props.type}>
        {props.children}
      </div>
    </div>
  )
}


const App = () => {
  const [ openModal, setOpenModal ] = useState(false)
  const [ editorMax, setEditorMax] = useState(false)
  const maximize = (type) => {
    type === 'editor' ? setEditorMax(true) : setEditorMax(false)
    setOpenModal(true)
  }
  return (
    <MarkdownProvider>
      <div className="container">
        <Header/>
        <div className="editor-container">
          <MarkdownContainer type="editor" onMaximize={() => maximize('editor')} onPreview={()=>maximize('preview')}>
            <TextEditor/>
          </MarkdownContainer>
          <MarkdownContainer type="preview" onMaximize={() => maximize('preview')}>
            <MarkdownPreview/>
          </MarkdownContainer>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={()=>setOpenModal(!openModal)}>
        {editorMax ? <TextEditor/> : <div className="modal-preview"><MarkdownPreview/></div>}
      </Modal>
    </MarkdownProvider>
  );
};

export default App