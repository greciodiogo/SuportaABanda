import React, { useEffect, useState } from "react";
import {  FaTimes } from "react-icons/fa";
import { Notification, useModal } from "..";
import {Modal} from "../modal/index.js";
import { Button, ContainerBottom, ContainerMain, ContainerTop, Form, Input, Title } from "../modal/styles";

const EmailPainel = ({openModal,setOpenModal}) => {
    const [formData, setFormData] = useState({FieldFrom:"",FieldTo:""})
    const [openNotification, setOpenNotification] = useState(false)
    // const { isShown, toggle } = useModal()
    const closeModal = () => {
    setOpenModal((status)=>!status);
  };

  const handleClick = () => {
    setOpenNotification(true)
    closeModal()
  };

  return (
    <React.Fragment>
        <ContainerTop>
            <Title>Confirmar Usuário</Title>
                <button className="btnClose">
                <FaTimes />
                </button>
        </ContainerTop>
        <ContainerMain>
            <Form>
            <Input type="email" placeholder="fonebahia8@gmail.com" onChange={(e)=>setFormData({...formData, FieldTo:e.target.value})} value={formData.FieldTo}/>
            </Form>
        </ContainerMain>
        <ContainerBottom>
            <Button onClick={handleClick}>Confirmar Email</Button>
            <Notification openNotification={openNotification} setOpenNotification={setOpenNotification}/>
        </ContainerBottom>
    </React.Fragment>
  );
};

export default EmailPainel;
