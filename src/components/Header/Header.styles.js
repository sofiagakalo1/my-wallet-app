import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  @media (max-width: 767px) {
    gap: 5px;
  }
`;
export const LogoSpan = styled.span`
  font-size: x-large;
  @media (max-width: 767px) {
    font-size: medium;
  }
`;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;
export const ConnectButton = styled.button`
  cursor: pointer;
  padding: 15px 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  background-color: transparent;
  transition: color 250ms ease, background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }

  @media (max-width: 767px) {
    padding: 10px 5px;
    font-size: 14px;
  }
`;
export const DataList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (max-width: 767px) {
    gap: 15px;
  }
`;
