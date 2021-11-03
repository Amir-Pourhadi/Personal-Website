import styled from "styled-components";

export const Container = styled.div(({ theme: { comingSoon } }) => ({
  gridArea: "countdown",
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(50px, 150px))",
  gridGap: 10,
  paddingBottom: 10,
  justifyContent: "center",
  "& div:not(:last-child)": {
    borderRight: `3px solid ${comingSoon.colors.green}`,
  },
  "@media (max-width: 500px)": {
    "& div:not(:last-child)": {
      borderRight: "none",
    },
    borderBottom: `5px solid ${comingSoon.colors.green}`,
  },
}));

export const Segment = styled.div({
  display: "grid",
  gridGap: 10,
  gridTemplateColumns: "1fr",
});

export const Number = styled.span({
  fontSize: 30,
  fontWeight: 700,
  transition: "transform 0.2s ease-in",
  "&:hover": {
    transform: "scale(1.3)",
  },
});

export const Caption = styled.span({
  fontSize: 16,
  fontWeight: 500,
});
