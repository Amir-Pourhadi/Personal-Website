import styled, { css, keyframes } from "styled-components";

const imageSpin = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

export const Container = styled.div(
  ({ loading }) => css`
    grid-area: "gear";
    animation: ${loading && imageSpin} infinite 5s linear;
  `
);

export const Image = styled.img({
  height: "40vmin",
  animation: css`
    ${imageSpin} infinite 20s linear
  `,
});
