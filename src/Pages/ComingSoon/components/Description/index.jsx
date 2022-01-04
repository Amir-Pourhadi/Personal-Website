import { Container, Content } from "./view";
import Notification from "../Notification";

export default function Description({ text, message, icon, alt, visible, bgColor }) {
  return (
    <Container>
      <Content>{text}</Content>
      <Notification message={message} icon={icon} alt={alt} visible={visible} bgColor={bgColor} />
    </Container>
  );
}
