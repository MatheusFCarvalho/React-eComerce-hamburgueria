import styled from "styled-components";

export const StyledCard = styled.div`
  min-width: 240px;
  width: 240px;
  height: 308px;

  img {
    height: 140px;
  }
  background: #ffffff;
  border: #e0e0e0 2px solid;

  button {
    width: min-content;
  }

  .contentImg {
    background: #f5f5f5;
    height: auto;
  }
  .contentCard {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #828282;
    }

    p {
      color: #27ae60;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    }

    text-align: left;
    margin: 10px 0 0 10px;
    height: 140px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 200px;
    width: 31%;
    img {
      height: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
    height: 333px;
  }
`;
