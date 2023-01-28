import styled from "styled-components";

export const Conatiner = styled.div`
  background-color: #0f52ba;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    background-color: #0f52ba;
    height: 101px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px;
  }
`;

export const Title = styled.div`
  width: 142.77px;
  height: 43.73px;
  display: flex;
  gap: 12px;
  align-items: center;
  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 19px;
    color: #ffffff;
  }
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;

    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
      color: #ffffff;
      mix-blend-mode: normal;
    }
    h2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
      color: #ffffff;
      mix-blend-mode: normal;
    }
  }
`;

export const Button = styled.button`
  background: "#FFFFF";
  width: 52px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  border: none;
  gap: 10px;
  #icon {
    width: 10.98px;
    height: 10.4px;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 90px;
    height: 45px;
    background: "#FFFFF";
    border-radius: 8px;
    border: none;
    #icon {
      width: 19.01px;
      height: 18px;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
