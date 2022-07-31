import Logo from "./Logo"
import NavbarItem from "./NavbarItem"
import { useRef, useEffect } from "react"

const Navbar = ({ items }) => {
  const showMenu = () => {
    const navbarItems = document.querySelector("navbarItems")
    console.log("showing menu", navbarItems, ref)
    ref.current.classList.toggle("showMenu")
  }

  const ref = useRef()
  return (
    <nav className="navbar">
      <Logo />
      <div ref={ref} className="navbarItems">
        {items.map((item) => (
          <NavbarItem item={item} />
        ))}
      </div>
      <div className="navbarButton " onClick={showMenu}>
        <span class="material-symbols-outlined navbarButtonItem">apps</span>
      </div>
    </nav>
  )
}

export default Navbar
