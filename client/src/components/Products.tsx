import { ProductsInfo } from "../utils/Helpers";
import ProductCard from "./ui/ProductCard";

const Products = () => {
  return (
    <section id="products-wrapper">
      {ProductsInfo.map((productInfo) => (
        <ProductCard
          title={productInfo.title}
          image={productInfo.image}
          capacity={productInfo.capacity}
          dimentions={productInfo.dimentions}
          functions={productInfo.functions}
          energyClass={productInfo.energyClass}
          timePeriod={productInfo.timePeriod}
          price={productInfo.price}
          installments={productInfo.installments}
        />
      ))}
    </section>
  );
};

export default Products;
