import { useState } from "react";
import { DisplayedProductsStateProps } from "../types/FilterCategory";
import ProductCard from "./ui/ProductCard";
import ShowMoreButton from "./ui/ShowMoreButton";

const Products = ({ allDisplayedProducts }: DisplayedProductsStateProps) => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const isAllVisible = visibleProducts >= allDisplayedProducts.length;

  const showMoreProducts = () => {
    setVisibleProducts(allDisplayedProducts.length);
  };
  return (
    <section id="products-wrapper">
      <div id="displayed-products">
        {allDisplayedProducts
          .slice(0, visibleProducts)
          .map((productInfo, index) => (
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
      </div>
      <ShowMoreButton
        showMoreProducts={showMoreProducts}
        isAllVisible={isAllVisible}
      />
    </section>
  );
};

export default Products;
