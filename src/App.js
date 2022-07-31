import { parallax, ParallaxLayer } from "@react-spring/parallax"
import Typed from "typed.js"
import "./index.css"

import Navbar from "./components/Navbar"

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
      Portfolio website
    </div>
  )
}

export default App
