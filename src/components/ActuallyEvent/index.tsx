import { Container } from "./styles";
import profileImage from "../../images/profileImage.png";

function ActuallyEvent() {
  return (
    <Container>
      <img src={profileImage} alt="Imagem de perfil" />
      <h4>
        <a href="#a">Sarah’s day care available now in North Sydney</a>
        Wednesday, Thursday, Friday - 7:30 - 5:30
      </h4>
    </Container>
  );
}

export default ActuallyEvent;
