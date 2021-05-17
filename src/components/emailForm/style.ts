import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 64px 0px;
  position: relative;

  hr {
    width: 784px;
    position: absolute;
    display: block;
    border: 1px solid #dfdfdf;
    &:first-of-type {
      top: 0;
    }
    &:nth-of-type(2) {
      bottom: 0;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    color: #3d3d3d;
    text-align: center;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #3d3d3d;
    margin: 16px 0px 74px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  input {
    background-color: #ffffff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #dfdfdf;
    padding: 14px 0px 14px 20px;
    width: 232px;
    margin-right: 12px;
    color: #3d3d3d;
    &::placeholder {
      color: #3d3d3d;
    }
  }

  button {
    background-color: #00c88c;
    border: none;
    border-radius: 4px;
    padding: 14px 31px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`;
