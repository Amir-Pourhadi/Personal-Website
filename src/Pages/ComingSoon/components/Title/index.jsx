import { Container } from "./view";

export default function Title({ text }) {
  return <Container>{text}</Container>;
}

Title.defaultProps = {
  text: "Coming Soon!",
};
