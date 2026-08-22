import "./Banner.css"

import banner1 from "../../assets/banners/banner-1.png"
import banner2 from "../../assets/banners/banner-2.png"
import banner3 from "../../assets/banners/banner-3.png"

function Banner() {
  return (
    <section className="banner-section">

      <div className="banner-card">
        <img src={banner1} alt="Fresh Juice" />

        <div className="banner-content">
          <h2>Fresh Juice</h2>
          <p>Fresh smoothie & Summer Juice</p>
        </div>
      </div>

      <div className="banner-card">
        <img src={banner2} alt="Fresh fruits" />

        <div className="banner-content">
          <h2>Fresh Fruits</h2>
          <p>Choose from our collection of fresh fruits.</p>
        </div>
      </div>

      <div className="banner-card">
        <img src={banner3} alt="Fast Food" />

        <div className="banner-content">
          <h2>Baked Products</h2>
          <p>Tasty food makes every day better.</p>
        </div>
      </div>

    </section>
  )
}

export default Banner