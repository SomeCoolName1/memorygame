import logo from "./logo.svg";
import "./App.css";
import GameHandling from "./components/game";
import GameHeader from "./components/header";

function App() {
  return (
    <>
      <div className="bg-bodyBackground w-full min-h-screen h-full font-custom text-lg">
        <GameHandling />
      </div>
    </>
  );
}

export default App;
// bg-bodyBackground
