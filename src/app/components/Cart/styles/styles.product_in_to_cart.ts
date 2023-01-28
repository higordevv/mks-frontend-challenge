import styled from "styled-components";

export const ProductCart = styled.div`
  background: white;
  display: flex;
  align-items: center;
  position: relative;
  max-width: 379px;
  max-height: 95px;
  justify-content: space-between;
  padding: 20px;
  margin: 28px 0px 28px;
  user-select: none;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  @media screen and (max-width: 500px) {
    width: 250px;
    height: 312px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  img {
    height: 57px;

    @media screen and (max-width: 500px) {
      height: 97px;
      width: 100px;
      margin-bottom: 13px;
    }
  }
  h1 {
    line-height: 17px;
    font-size: 13px;
    color: #2c2c2c;
    max-width: 85px;
    max-height: 33px;

    display: block;

    font-weight: 400;
    @media screen and (max-width: 500px) {
      font-size: 16px;
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductName = styled.span`
  max-width: 113px;
  height: 33px;
  word-break: break-all;

  #name {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #2c2c2c;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  span {
    margin-bottom: 4px;
    font-size: 8px;
  }
  div {
    width: 70px;
    height: 30px;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    span {
      font-size: 12px;
      display: flex;
      margin-bottom: 0;
      align-items: center;
      justify-content: center;
      width: 33%;
    }
    button {
      font-size: 12px;
      width: 33%;
      display: flex;
      cursor: pointer;
      outline: none;
      border: none;
      background: transparent;
      justify-content: center;
      align-items: center;
      border-right: 0.2px solid #bfbfbf;
    }
  }
  button:last-child {
    border-right: none;
    border-left: 0.2px solid #bfbfbf;
  }
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const RemoveProduct = styled.button`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: unset;
  border: none;
  outline: none;
  background: #000000;
  color: #ffff;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px;
  transform: translate(8px, -8px);
  border-radius: 50%;
`;
