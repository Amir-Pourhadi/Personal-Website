import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <ThemeProvider>
      <div className="container-fluid p-0">
        <GlobalStyle />
        <Switch>
          
        </Switch>
      </div>
    </ThemeProvider>
  );
}
