import { parallax, ParallaxLayer } from "@react-spring/parallax"

import "./index.css"

import Navbar from "./components/Navbar"
import TypedPhrase from "./components/Typed"
import Intro from "./components/Intro"

function App() {
  const navbaritems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About me",
      link: "#aboutMe",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]
  return (
    <div className="App">
      <Navbar items={navbaritems} />
      <br />
      <div className="mainContent">
        <Intro />
      </div>
    </div>
  )
}

export default App
