import Container from "./components/Container";
import { NewsProvider } from "./components/main/NewsContext";
import { ThemeProvider } from "./theme/ThemeContext";
import { GlobalStyles } from "./theme/GlobalStyles";

export default function App() {
  return (
    <>
      <NewsProvider>
        <ThemeProvider>
          <GlobalStyles />
          <div className="App">
            <Container />
          </div>
        </ThemeProvider>
      </NewsProvider>
    </>
  );
}
