import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 64px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 190px;
  }

  hr {
    width: 784px;
    position: absolute;
    display: block;
    border: 1px solid #dfdfdf;
    bottom: 0;
  }

  @media (max-width: 900px) {
    .content {
      padding: 0;
      flex-direction: column;
      padding: 0px 16px;

      img {
        padding: 0px 8px;
      }
    }

    hr {
      width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 44px;

  h2 {
    font-size: 28px;
    line-height: 32px;
    color: #3d3d3d;
    font-weight: 500;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #3d3d3d;
    margin: 40px 0px;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #5e20a4;
  }

  @media (max-width: 900px) {
    margin: 40px 0px 0px;
    padding: 0px 24px;

    h2 {
      text-align: center;
      padding: 0px 20px;
      font-size: 22px;
    }

    p {
      text-align: center;
      margin-top: 16px;
      font-weight: 400;
    }

    a {
      text-align: center;
    }
  }
`;
