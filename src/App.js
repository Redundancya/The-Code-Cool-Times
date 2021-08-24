import "./App.css";
import Container from "./components/Container";
import { NewsProvider } from "./components/main/NewsContext";

export default function App() {
  return (
    <NewsProvider>
      <div className="App">
        <Container></Container>
      </div>
    </NewsProvider>
  );
}
