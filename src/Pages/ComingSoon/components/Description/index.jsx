import { Container, Content } from "./view";

export default function Description({ text }) {
  return (
    <Container>
      <Content>{text}</Content>
    </Container>
  );
}

Description.defaultProps = {
  text: "Amir Pourhadi's personal website will be up and running shortly. Please subscribe to my newsletter below to receive updates when my projects are available!",
};
