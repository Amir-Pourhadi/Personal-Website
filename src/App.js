import "bootstrap/dist/css/bootstrap.min.css";
import ComingSoon from "ComingSoon";
import { Redirect, Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import Theme from "Theme";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="container-fluid p-0">
        <GlobalStyle />
        <Switch>
          <Route path="/coming-soon" component={ComingSoon} />
          <Redirect from="/" to="/coming-soon" />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
