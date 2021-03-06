import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 228px;
  position: relative;

  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #3d3d3d;
  }

  p {
    color: #3d3d3d;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    margin: 40px 0px;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #5e20a4;
    margin-bottom: 64px;
  }

  hr {
    width: 784px;
    position: absolute;
    display: block;
    border: 1px solid #dfdfdf;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    padding: 64px 16px;

    h2 {
      font-size: 22px;
      text-align: center;
      padding: 0px 50px;
    }

    p {
      margin: 16px 0px 24px;
    }

    a {
      text-align: center;
      padding: 0px 8px;
    }

    img {
      display: none;
    }
  }

  @media (max-width: 900px) {
    hr {
      width: 100%;
    }
  }
`;
