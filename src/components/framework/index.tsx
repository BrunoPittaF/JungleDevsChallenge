import { Container } from "./style";
import imageTable from "../../images/imageTable.png";

function Framework() {
  return (
    <Container>
      <h2>A framework built for the long term</h2>

      <p>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </p>

      <a href="#asd">Read how Hapu’s tribal background defines our app</a>

      <img src={imageTable} alt="testeImageTable" />

      <hr />
    </Container>
  );
}

export default Framework;
