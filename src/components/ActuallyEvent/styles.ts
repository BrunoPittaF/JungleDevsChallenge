import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 0px;
  background-color: #ffffff;
  border-bottom: 1px solid #dfdfdf;

  h4 {
    margin-left: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    a {
      margin-right: 2px;
      color: #5e20a4;
    }
    br {
      display: none;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px 37px;

    h4 {
      margin: 16px 0px 12px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
      br {
        display: block;
      }
    }
  }
`;
