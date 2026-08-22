import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>FoodMart</h2>
          <p>
            Fresh and quality food products delivered for your everyday needs.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Products</a>
          <a href="#">Brands</a>
        </div>

        <div className="footer-links">
          <h3>Information</h3>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FoodMart. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer