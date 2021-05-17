import { Container, Form } from "./style";

function EmailForm() {
  return (
    <Container>
      <hr />
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <p>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>

      <Form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <button type="submit">Send</button>
      </Form>

      <hr />
    </Container>
  );
}

export default EmailForm;
