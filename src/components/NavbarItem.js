const NavbarItem = ({ item }) => {
  return (
    <div className="navbarItemContainer">
      <a href={item.link}>
        <p>{item.name}</p>
      </a>
    </div>
  )
}

export default NavbarItem
