import React, {useState} from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./global-style";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTemas from "./Components/SwitcherTemas";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
    <GlobalStyle />
    <BtnTema onClick={toggleTema}>
      <SwitcherTemas tema={true}/>
    </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
