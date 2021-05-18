import { Container, Wrapper } from "./style";
import checkboxGroup from "../../images/checkboxGroup.png";

function Payment() {
  return (
    <Container>
      <div className="content">
        <img src={checkboxGroup} alt="" />
        <Wrapper>
          <h2>Shared payments made simple</h2>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>

          <a href="#asd">
            Read how Bridget’s share (without Hapu) ended over $15
          </a>
        </Wrapper>
      </div>
      <hr />
    </Container>
  );
}

export default Payment;
