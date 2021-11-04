import styled from "styled-components";

export const Content = styled.h1(({ theme: { comingSoon } }) => ({
  gridArea: "title",
  display: "grid",
  gridGap: 20,
  width: "100%",
  maxWidth: 700,
  alignItems: "center",
  gridTemplateColumns: "1fr auto 1fr",

  "&:before, &:after": {
    display: "block",
    content: "''",
    height: 10,
  },
  "&:before": {
    background: `linear-gradient(to left, ${comingSoon.colors.green}, transparent)`,
  },
  "&:after": {
    background: `linear-gradient(to right, ${comingSoon.colors.green}, transparent)`,
  },
}));
