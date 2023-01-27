import { Container, ModalContainer } from './styled'
import React from 'react'
import ReactDOM  from 'react-dom'

export const Modal = ({isShown,hide,content}) =>{
  
  const modal = (
    <Container>
      <ModalContainer>
        {content}
      </ModalContainer>
    </Container>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null

}
