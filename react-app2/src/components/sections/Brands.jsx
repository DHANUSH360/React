import "./Brands.css"

import brand1 from "../../assets/brands/brand-1.jpg"
import brand2 from "../../assets/brands/brand-2.jpg"
import brand3 from "../../assets/brands/brand-3.jpg"
import brand4 from "../../assets/brands/brand-4.jpg"

function Brands() {
  return (
    <section className="brands-section">

      <div className="brands-heading">
        <h2>Newly Arrived Brands</h2>
        <p>Discover our latest brands and products</p>
      </div>

      <div className="brands-container">

        <div className="brand-card">
          <img src={brand1} alt="Brand 1" />

          <div className="brand-content">
            <p className="brand-name">Brand One</p>
          </div>
        </div>

        <div className="brand-card">
          <img src={brand2} alt="Brand 2" />

          <div className="brand-content">
            <p className="brand-name">Brand Two</p>
            <h3>Natural and healthy food products</h3>
          </div>
        </div>

        <div className="brand-card">
          <img src={brand3} alt="Brand 3" />

          <div className="brand-content">
            <p className="brand-name">Brand Three</p>
            <h3>Fresh products for your daily needs</h3>
          </div>
        </div>

        <div className="brand-card">
          <img src={brand4} alt="Brand 4" />

          <div className="brand-content">
            <p className="brand-name">Brand Four</p>
            <h3>Quality products for every home</h3>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Brands