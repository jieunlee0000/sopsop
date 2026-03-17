import Banner from "./Banner";
import Product_Card from "./Product_Card";

const Product = () => {

    return (
        <section className="product">
            <Banner />
            <div className="inner">
                <Product_Card />

            </div>
        </section>
    );
};

export default Product;