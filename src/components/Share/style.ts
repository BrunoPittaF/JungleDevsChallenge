import styled from "styled-components";

export const Container = styled.section`
  background-color: #f2f2f2;
  display: flex;
  padding: 120px 60px 120px 228px;

  .wrapper {
    display: flex;
    flex-direction: column;
    h2 {
      font-weight: 500;
      font-size: 28px;
      line-height: 32px;
      color: #3d3d3d;
      padding-right: 160px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #4a4a4a;
      margin: 40px 0px;
      padding-right: 30px;
      a {
        line-height: 24px;
        color: #5e20a4;
        font-weight: 500;
      }
    }

    a {
      color: #5e20a4;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0px 16px;

    .wrapper {
      align-items: center;
      justify-content: center;
      h2 {
        text-align: center;
        font-size: 22px;
        margin-top: 22px;
        padding: 0px 71px;
      }
      p {
        margin-top: 16px;
        padding: 0px 16px;
        text-align: center;
      }

      a {
        padding-bottom: 64px;
      }
    }
  }
`;
