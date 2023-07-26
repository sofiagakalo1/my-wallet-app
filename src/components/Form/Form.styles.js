import styled from "styled-components";

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding: 40px 15px 20px 15px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;

  @media (max-width: 767px) {
    gap: 15px;
    padding: 20px 10px 12px 10px;
  }
  @media (max-width: 1023px) {
    max-width: 400px;
  }
`;
export const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  outline: none;
  width: 90%;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
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
    font-size: 16px;
  }
`;