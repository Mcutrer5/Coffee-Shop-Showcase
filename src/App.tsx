import "./App.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Home from "./pages/home/home";
import { customTheme } from "./theme";

function App() {
  const width = window.innerWidth;
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <div className="App" style={{ overflow: `${width > 1000 ? "hidden" : "scroll"}` }}>
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
