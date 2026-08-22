function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <img src='./assets/brands/logo.png' alt='FoodMart logo'></img>
            </div>

            <div className="nav-links">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">BLOG</a>
                <a href="#">CONTACT</a>
            </div>

        </nav>
    );
}

export default Navbar;