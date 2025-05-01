import { DisplayedProductsStateProps } from "../types/FilterCategory";
import ProductCard from "./ui/ProductCard";

const Products = ({ allDisplayedProducts }: DisplayedProductsStateProps) => {
  return (
    <section id="products-wrapper">
      {allDisplayedProducts.map((productInfo, index) => (
        <ProductCard
          key={index}
          title={productInfo.title}
          image={productInfo.image}
          capacity={productInfo.capacity}
          dimentions={productInfo.dimentions}
          functions={productInfo.functions}
          energyClassImg={productInfo.energyClassImg}
          timePeriod={productInfo.timePeriod}
          price={productInfo.price}
          installments={productInfo.installments}
        />
      ))}
    </section>
  );
};

export default Products;
