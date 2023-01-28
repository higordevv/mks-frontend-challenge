import styled from "styled-components";
import { motion } from "framer-motion";

export const CartModal = styled(motion.div)`
  height: 100vh;
  width: 375px;
  background: #0f52ba;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @media (min-width: 768px) {
    height: 100vh;
    width: 486px;
    background: #0f52ba;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  }
`;
export const ModalContainer = styled.div`
  padding: 42px;
  background: #0f52ba;
  .paddingLast:last-child {
    padding-bottom: 97px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 101px;
  margin-bottom: 36px;

  #Title h1 {
    max-width: 180px;
    max-height: 56px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: white;
    line-break: auto;
  }
`;
export const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  background-color: black;
  color: white;
  outline: none;
  border: 0;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
`;
export const ProductList = styled.div`
  padding: 5px 10px;
  margin-bottom: 64px;
  overflow-x: scroll;
  overflow-wrap: normal;
  height: 60vh;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding-left: 42px;
  padding-right: 42px;
  bottom: 97px;
  height: 97px;
  right: 0;
  left: 0;
  width: 330px;
  background: #0f52ba;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    line-height: 15px;
  }
  @media (min-width: 768px) {
    width: 485px;
  }
`;

export const FinalityButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 0;
  background: black;
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;

  h1 {
    font-size: 28px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    color: white;
    line-height: 15px;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    right: 0;
    width: 485px;
    background: black;
    height: 100px;
    position: absolute;
    bottom: 0;
  }
`;
