import Tutorial from "./components/Tutorial";
import GlobalStyle from "./components/styles/Global.styles";
// import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <ThemeProvider theme="dark"> */}
        <Tutorial />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
