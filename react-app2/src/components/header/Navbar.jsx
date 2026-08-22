import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        FoodMart
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Products</a>
        <a href="#">Brands</a>
      </div>

    </nav>
  )
}

export default Navbar