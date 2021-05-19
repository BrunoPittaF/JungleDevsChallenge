import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 32px;

  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #3d3d3d;
  }

  p {
    margin: 16px 0px 32px;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #3d3d3d;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #5e20a4;
    margin-top: 24px;
  }

  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #3d3d3d;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
`;

export const Retangle = styled.div`
  background-color: #5e20a4;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 19px 25px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 21px;
    p {
      margin: 0;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      color: #ffffff;
      &:last-of-type {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`;

export const FooterPage = styled.footer`
  padding: 82px 128px 90px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .footer-list {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0px 29px;
    li {
      h5 {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #3d3d3d;
      }
    }
  }

  .icons {
    img {
      margin: 0px 8px;
      &:first-of-type {
        margin-left: 0px;
      }
    }
  }
`;
