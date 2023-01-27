import React, { useState } from "react";
import { FaCaretRight, FaTimes } from "react-icons/fa";
import ReactDOM  from 'react-dom'
import "./PreviewModal.css";
import { Title, Role, Desc, Bottom, Button, About, Name, Price, Description, Picture, Content, Main, Top, ModalContainer, Container} from "../modal/styled";


const PreviewModal = ({ product, showPainel, closepreviewProduct }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const closeModal = () => {
    setShowCheckout(false);
  };

  const handleAddToCart = (idx) => {
    closepreviewProduct()
    setShowCheckout(true);
  };
  
    const url = `images`;

  const modal = (
    <Container>
      <ModalContainer>
        <Top className="top">
          <span>Perfil</span>
            <button className="btnClose" onClick={closepreviewProduct}>
              <FaTimes />
            </button>
        </Top>
        <Main>
          <Picture>
            <img src={`${url}/${product.picture}`} alt={product.picture} />
          </Picture>
          <Content>
            <Role>{product.role}</Role>
            <Title>
                <Name>{product.name}, </Name>
                <Description> {product.age}anos</Description>
            </Title>
            <p style={{fontWeight:"bold"}}>Sobre mim:</p>
            <Desc>{product.description}</Desc>
            <Price><span style={{fontWeight:"bold"}}> Nacionalidade:</span> {product.country}</Price>
            <Price><span style={{fontWeight:"bold"}}> Morada:</span> {product.address}</Price>
            <Price><span style={{fontWeight:"bold"}}> Anos de Exp.:</span> {product.exp}</Price>
            <Price><span style={{fontWeight:"bold"}}> Revisões:</span> {product.reviews}⭐</Price>
          </Content>
        </Main>
        <Bottom>
            <Button outlined onClick={closepreviewProduct} aria-label="cancelar">Cancelar</Button>
            <>
              <Button onClick={()=>handleAddToCart(product.id)} aria-label="adicionar carrinho">Negociar</Button>
            </>
        </Bottom>
      </ModalContainer>
    </Container>
  )
  return showPainel ? ReactDOM.createPortal(modal, document.body) : null
};

export default PreviewModal;
