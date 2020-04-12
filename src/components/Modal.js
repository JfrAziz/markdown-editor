import React from 'react'
import {FIX} from 'icons/Icon'
import 'components/Modal.scss'

const Modal = (props) => {
  return props.isOpen && (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-wrapper" onClick={event=>event.stopPropagation()}>
        <div className="modal-close" onClick={props.onClose}><FIX/></div>
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal;