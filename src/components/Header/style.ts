import styled from "styled-components";
import backgroundTop from "../../images/background-top.png";

export const ContainerHeader = styled.section`
  height: 616px;

  background-image: url(${backgroundTop}),
    linear-gradient(314.72deg, #c86dd7 -1.5%, #7e49c3 39.43%, #5912ac 86.02%);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  header {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 32px;
  }
`;

export const NavigationHeader = styled.ul`
  display: flex;
  list-style-type: none;

  img {
    height: 64px;
    padding-left: 20px;
  }

  li {
    padding: 28px 16px 0px;
    &:first-of-type {
      padding-left: 40px;
    }
    h5 {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      a {
        text-decoration: none;
        font-weight: 500;
        color: white;
      }
    }
  }
`;

export const Register = styled.div`
  display: flex;
  height: 44px;
  align-items: center;
  padding-top: 28px;

  button {
    background-color: #00c88c;
    border-radius: 4px;
    border: none;
    padding: 12px 21px 12px 20px;
    color: #ffffff;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-right: 23px;
  }

  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  display: flex;
  padding-left: 128px;
  height: 100%;
  align-items: center;
  padding-right: 228px;
  justify-content: space-between;
  img {
    &:nth-of-type(2) {
      height: 290px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    color: #ffffff;
    width: 490px;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    margin: 24px 0px 40px;
    width: 584px;
  }

  .playDiv {
    display: flex;
    align-items: center;
    a {
      margin-left: 16px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }
`;
