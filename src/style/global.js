import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        background: #ffffff;
    }

    h3{
        font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    }
`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border-style: none;

  ${(props) => {
    if (props.cinza) {
      return css`
        background: #e0e0e0;
        color: #828282;

        &:hover {
          background: #828282;
          color: #e0e0e0;
        }
      `;
    } else {
      return css`
        background: #27ae60;
        color: #ffffff;
        &:hover {
          background: #93d7af;
        }
      `;
    }
  }}

  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  //Condição if e else TAMANHO.
  ${(props) => {
    if (props.buttonSize === "default") {
      return css`
        font-size: 24px;
        padding: 0 20px;
        height: 60px;
      `;
    } else if (props.buttonSize === "medium") {
      return css`
        font-size: 20px;
        padding: 0 20px;
        height: 40px;
      `;
    } else if (props.buttonSize === "large") {
      return css`
        font-size: 20px;
        width: 100%;
        height: 60px;
      `;
    }
  }}
`;

export const InputSearch = styled.div`
  box-sizing: border-box;

  width: 290px;
  height: 60px;
  padding: 10px;
  box- &:focus-within {
    border: #333333 2px solid;
    input {
      ::placeholder {
        color: #828282;
      }
    }
  }

  button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  input {
    border-style: none;
    ::placeholder {
      color: #e0e0e0;
    }
  }
  input:focus {
    outline: none;
  }

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
`;
