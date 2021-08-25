import "./App.css";
import Container from "./components/Container";
import { NewsProvider } from "./components/main/NewsContext";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <NewsProvider>
      <ThemeProvider>
        <div className="App">
          <Container></Container>
        </div>
      </ThemeProvider>
    </NewsProvider>
  );
}
