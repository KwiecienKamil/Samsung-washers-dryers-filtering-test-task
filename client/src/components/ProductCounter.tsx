import { DisplayedProductsStateProps } from "../types/FilterCategory";

const ProductCounter = ({
  allDisplayedProducts,
}: DisplayedProductsStateProps) => {
  return (
    <div id="product-counter">
      <p>Liczba wyników: {allDisplayedProducts.length}</p>
    </div>
  );
};

export default ProductCounter;
