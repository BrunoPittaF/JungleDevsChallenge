import { FormEvent, useState } from "react";
import { formService } from "../../services/forms";
import { Container, Form } from "./style";

function EmailForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      formService.postForm(name, email);
      alert(
        `Sucesso, vc enviou com sucesso o seu nome:${name} e seu email:${email}`
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Container>
      <hr />
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <p>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Send</button>
      </Form>

      <hr />
    </Container>
  );
}

export default EmailForm;
