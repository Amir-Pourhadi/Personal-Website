import styled from "styled-components";

export const Container = styled.div({
  gridArea: "description",
  display: "grid",
  fontSize: 16,
  fontWeight: 500,
  maxWidth: 700,
  gridTemplateColumns: "1fr",
});

export const Content = styled.p({
  grid: "1 / -1 1 / -1",
});
