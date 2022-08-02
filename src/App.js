import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import "./index.css"

import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"

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
        <Parallax className="parallax" pages={2}>
          <ParallaxLayer
            speed={-0.75}
            style={{
              backgroundColor: "#121316",
            }}
          >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            style={{
              backgroundColor: "#121316",
            }}
          >
            <AboutMe />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default App
