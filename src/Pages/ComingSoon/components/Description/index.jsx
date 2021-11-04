import { Container, Content } from "./view";

export default function Description({ text }) {
  return (
    <Container>
      <Content>{text}</Content>
    </Container>
  );
}
