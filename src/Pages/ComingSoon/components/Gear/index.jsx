import { Container, Image } from "./view";

export default function Gear({ src, alt, loading }) {
  return (
    <Container loading={loading}>
      <Image src={src} alt={alt} />
    </Container>
  );
}
