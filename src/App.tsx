import "./App.css";
import { Stars } from "./components/Stars";

function App() {
  return (
    <div className="App">
      <h1>Рейтинг фильмов</h1>
      <Stars count={1} />
      <Stars count={4} />
      <Stars count={5} />

      {/* Эти не должны отображаться */}
      <Stars count={0} />
      <Stars count={7} />
      <Stars count={-2} />
    </div>
  );
}

export default App;
