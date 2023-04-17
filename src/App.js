import logo from "./logo.svg";
import "./App.css";
import { Card, Routers } from "./components/Atom";
import { Navbar, Products } from "./components/Molecules";
import { Home } from "./components/Organisms";

function App() {
  return (
    <>
      <Navbar />
      <Routers />
    </>
  );
}

export default App;
