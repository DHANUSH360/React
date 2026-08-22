import "./Category.css"

import category1 from "../../assets/categories/category-1.png"
import category2 from "../../assets/categories/category-2.png"
import category3 from "../../assets/categories/category-3.png"
import category4 from "../../assets/categories/category-4.png"

function Category() {
  return (
    <section className="category-section">

      <div className="section-heading">
        <h2>Category</h2>
        <p>Browse our popular categories</p>
      </div>

      <div className="category-container">

        <div className="category-card">
          <img src={category1} alt="Fruits" />
          <h3>Veges</h3>
        </div>

        <div className="category-card">
          <img src={category2} alt="Vegetables" />
          <h3>Bread & Sweets</h3>
        </div>

        <div className="category-card">
          <img src={category3} alt="Dairy" />
          <h3>Cooldrinks</h3>
        </div>

        <div className="category-card">
          <img src={category4} alt="Bakery" />
          <h3>Alcohol</h3>
        </div>

      </div>

    </section>
  )
}

export default Category