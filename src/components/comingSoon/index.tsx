import ImageSection5 from "../../images/ImageSection5.png";
import ImageSection5Mobile from "../../images/mobile/ImageSection5Mobile.jpg";
import { Container } from "./style";

function ComingSoon() {
  return (
    <Container>
      <picture>
        <source media="(max-width: 1023px)" srcSet={ImageSection5Mobile} />
        <source media="(min-width: 1024px)" srcSet={ImageSection5} />
        <img
          src={ImageSection5}
          alt="Dairy icon"
          title="Nanny Share Daily Diary"
        />
      </picture>

      <h2>Coming soon: Nanny Share Daily Diary!</h2>

      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </Container>
  );
}

export default ComingSoon;
