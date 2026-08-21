function NewProduct() {
    return (
        <section className="new-product">

            <div className="product-text">

                <p className="small-title">
                    NEW PRODUCT
                </p>

                <h2>
                    The Twist of Healthy Yogurt
                </h2>

                <p>
                    This delicious frozen yogurt is made
                    with fresh ingredients and natural
                    flavors. Enjoy a healthy and tasty
                    dessert anytime.
                </p>

            </div>

            <div className="product-image">

                <img
                    src="/images/yogurt.jpg"
                    alt="Healthy yogurt"
                />

            </div>

        </section>
    );
}

export default NewProduct;