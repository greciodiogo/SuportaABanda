import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContainer = styled.div`
  width: 600px;
  margin: 10px;
  opacity: 1;
  position: relative;
  background-color: white;
  transition: all 250ms ease-in-out;
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: rgb(243, 241, 241);
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    font-size: 18px;
    opacity: 0.8;
  }
  .btnClose {
    cursor: pointer;
    font-size: 12px;
    opacity: 0.5;
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(243, 241, 241);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  gap: 6px;
  position: relative;
`;
export const Main = styled.div`
  width: 100%;
  // height: 300px;
  display: flex;
  flex-direction: column;
`;
export const Picture = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    // transform: scale(1.2);
  }
`;
export const Content = styled.div`
  padding-top: 0px;
  padding: 20px;
`;
export const About = styled.a`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: black;
  opacity: 0.8;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Button = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  border: 1px solid ${({outlined}) => (outlined ? "#35a944" : "var(--primary)")};
  color: ${({outlined}) => (outlined ? "black" : "white")};
  background-color: ${({outlined}) => (outlined ? "white" : "#35a944")};
  opacity: ${({outlined}) => outlined && 0.8};
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.8;
  }
`;
export const Title = styled.h4`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

export const Role = styled.h2`
  display: flex;
  padding: 1rem;
  color: #35a944;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.p`
  font-size: 22px;
  opacity: 0.8;
`;
export const Description = styled.p`
  font-size: 16px;
  opacity: 0.8;
`;
export const Desc = styled.p`
  font-size: 14px;
  opacity: 0.8;
  padding: 5px;
`;
export const Price = styled.p`
  font-size: 16px;
  opacity: 0.8;
  padding: 5px;
  `;
