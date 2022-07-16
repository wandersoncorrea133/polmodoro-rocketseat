import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}
