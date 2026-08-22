import "./Trending.css"

import product1 from "../../assets/products/product-1.png"
import product2 from "../../assets/products/product-2.png"
import product3 from "../../assets/products/product-3.png"
import product4 from "../../assets/products/product-4.png"

function Trending() {
  return (
    <section className="trending-section">

      <div className="trending-heading">
        <h2>Trending Products</h2>
        <p>Explore our most popular products</p>
      </div>

      <div className="trending-container">

        <div className="product-card">
          <img src={product1} alt="Product 1" />

          <div className="product-content">
            <h3>Fresh Melon Juice</h3>
            <p>1 UNIT</p>
            <span>$18.00</span>
          </div>
        </div>

        <div className="product-card">
          <img src={product2} alt="Product 2" />

          <div className="product-content">
            <h3>Crunchy Cookies</h3>
            <p>1 UNIT</p>
            <span>$12.00</span>
          </div>
        </div>

        <div className="product-card">
          <img src={product3} alt="Product 3" />

          <div className="product-content">
            <h3>Fresh Cucumbers</h3>
            <p>1 UNIT</p>
            <span>$8.00</span>
          </div>
        </div>

        <div className="product-card">
          <img src={product4} alt="Product 4" />

          <div className="product-content">
            <h3>Fresh Milk</h3>
            <p>1 UNIT</p>
            <span>$10.00</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Trending