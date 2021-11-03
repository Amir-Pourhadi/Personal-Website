import styled from "styled-components";
import floatingCogs from "./images/floating-cogs.svg";

export const Main = styled.main(({ theme: { comingSoon } }) => ({
  minHeight: "100vh",
  padding: "10px",
  backgroundImage: `url(${floatingCogs})`,
  backgroundColor: comingSoon.colors.darkGray,
  backgroundAttachment: "fixed",
  textShadow: "0 2px 0 rgba(0,0,0,0.07)",
  textAlign: "center",
  display: "grid",
  gridGap: "10px",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "100px auto 50px auto 100px auto",
  gridTemplateAreas: "'countdown' 'logo' 'title' 'description' 'subscribe' 'social'",
  justifyItems: "center",
  alignItems: "center",
  color: comingSoon.colors.white,
}));
