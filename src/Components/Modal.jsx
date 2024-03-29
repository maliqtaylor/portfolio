import React from 'react';
import { Button } from "semantic-ui-react";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  borderStyle: 'solid',
  borderWidth: '3px',
  width: '500px',
  textAlign: 'center',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ onClose, open, children }) {
  if (!open) return null
  return (
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        {children}
        <Button onClick={onClose}> Close </Button>
      </div>
    </>
  )
}