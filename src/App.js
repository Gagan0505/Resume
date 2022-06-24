import "./App.css";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/Homepage/Homepage";
import Techstack from "./components/Techstack/Techstack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="app">
    <Navbar />
    <Homepage />
    <Techstack />
    <Experience />
    <Projects />
    </div>
  );
}

export default App;
