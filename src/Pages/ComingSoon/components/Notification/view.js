import styled from "styled-components";

export const Container = styled.div(({ theme: { comingSoon }, visible, bgColor }) => ({
  backgroundColor: comingSoon.colors[bgColor],
  borderRadius: 8,
  display: "grid",
  gridGap: 10,
  gridColumn: "1 / -1",
  gridRow: "1 / -1",
  gridTemplateColumns: "1fr 5fr",
  border: `1px solid ${comingSoon.colors.black}`,
  position: "relative",
  transition: "350ms",
  transform: visible ? "translateY(0)" : "translateY(100%)",
}));

export const StatusIcon = styled.img({
  justifySelf: "center",
  alignSelf: "center",
  width: 40,
});

export const StatusMessage = styled.p(({ theme: { comingSoon } }) => ({
  color: comingSoon.colors.black,
  fontWeight: 500,
  alignSelf: "center",
  paddingRight: 10,
}));
