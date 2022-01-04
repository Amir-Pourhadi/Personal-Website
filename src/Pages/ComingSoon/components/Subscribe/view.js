import styled from "styled-components";

export const Form = styled.form({
  gridArea: "subscribe",
  display: "grid",
  gridGap: 10,
  gridTemplateColumns: "[input] 4fr [button] 1fr",

  "@media (max-width: 700px)": {
    gridTemplateAreas: "'input' 'button'",

    "& input, button": {
      width: 250,
      gridColumn: "1 / -1",
    },
  },
});

export const Input = styled.input(({ theme }) => {
  const { colors } = theme.comingSoon;

  return {
    gridArea: "input",
    borderRadius: 4,
    height: 40,
    backgroundColor: colors.black,
    border: `1px solid ${colors.white}`,
    color: colors.white,
    paddingLeft: 10,
    outline: "none",
    fontSize: 16,
    transition: "border-color 0.2s ease-in",

    "&::placeholder": {
      color: "#999994",
    },

    "&:hover, &:focus": {
      borderColor: colors.green,
    },
  };
});

export const Button = styled.button(({ theme }) => {
  const { colors } = theme.comingSoon;

  return {
    gridArea: "button",
    height: 40,
    backgroundColor: colors.green,
    color: colors.black,
    border: `1px solid ${colors.black}`,
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bolder",
    transition: "filter 0.2s ease-in",

    "&:hover, &:focus": {
      filter: "brightness(85%)",
    },
  };
});
