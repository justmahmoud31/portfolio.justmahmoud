import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
