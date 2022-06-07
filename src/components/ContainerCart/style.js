import styled from "styled-components";

export const StyledCart = styled.div`
  min-width: 300px;
  width: 25%;
  height: fit-content;
  background: #f5f5f5;
  margin: 20px auto;

  .headerCart {
    border-radius: 5px 5px 0 0;
    height: 60px;
    background-color: #27ae60;
    display: flex;
    align-items: center;

    h3 {
      margin-left: 15px;
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }

    ProductsSaled {
      background-color: #27ae60;
    }
  }

  .mainCart {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0px;
  }
`;

export const StyledCartSaled = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 60px;
    background-color: #e0e0e0;
    border-radius: 6px;
  }
`;

export const StyledProductsSaled = styled.div`
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    text-align: left;

    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }
  .imgAndTitle {
    display: flex;
    gap: 10px;
  }

  .titleAndCategory {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: #828282;
    }
  }

  .removeAndQtd {
    p {
      min-width: 65px;
      margin-top: 4.5px;

      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      color: #bdbdbd;
    }
  }
`;
export const RemoveButtonProd = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #bdbdbd;
  background-color: transparent;
  border: none;

  cursor: pointer;
  &:hover {
    color: #828282;
  }
`;

export const StyledTotalValue = styled.div`
  .infoTotal {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  h5 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }
`;

export const StyledLine = styled.div`
  height: 2px;
  margin-top: 21px;
  background: #e0e0e0;
  width: 100%;
`;

export const StyledCartLonely = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    text-align: center;

    color: #333333;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-align: center;

    color: #828282;
  }
`;
