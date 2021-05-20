import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    padding-top: 96px;
  }

  h2 {
    margin: 40px 0px;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: #3d3d3d;
  }

  p {
    width: 784px;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #3d3d3d;
  }

  @media (max-width: 900px) {
    padding: 0px 16px 64px;

    h2 {
      text-align: center;
      margin: 24px 0px 16px;
      font-size: 22px;
      padding: 0px 20px;
    }

    p {
      width: 100%;
      font-weight: 400;
    }
  }
`;
