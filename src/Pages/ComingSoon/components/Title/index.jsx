import { Content } from "./view";

export default function Title({ text }) {
  return <Content>{text}</Content>;
}

Title.defaultProps = {
  text: "Coming Soon!",
};
