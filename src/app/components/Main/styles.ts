import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;
export const ContainerCards = styled.div`
  max-width: 1000px;
  justify-content: center;
  max-height: calc(100vh - 101px);
  overflow: auto;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: calc(38px + 64px);
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
`;
