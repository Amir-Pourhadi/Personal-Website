import { Container, StatusIcon, StatusMessage } from "./view";

export default function Notification({ message, icon, alt, visible, bgColor }) {
  return (
    <Container visible={visible} bgColor={bgColor}>
      <StatusIcon src={icon} alt={alt} />
      <StatusMessage>{message}</StatusMessage>
    </Container>
  );
}
