import "../src/styles/app.css";
import Home from "./pages/home/Home";
import Animate from "../src/utils/Animate";
import Links from "./components/Links";
// import About from "./pages/about/About";
function App() {
  return (
    <>
      <Animate>
        <Links />
        <Home />
      </Animate>
    </>
  );
}

export default App;
