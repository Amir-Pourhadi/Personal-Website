import { Container } from "./view";
import

export default function SocialLinks({ links }) {
  return (
    <Container>
      {links.map(({ name, url }, index) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <object data="" type="image/svg+xml"></object>
        </a>
      ))}
    </Container>
  );
}
