import { Container, Image } from "./view";

export default function Gear({ src, alt }) {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
}
