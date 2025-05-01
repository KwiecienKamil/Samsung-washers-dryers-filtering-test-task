import { FC } from "react";
import { ProductInfoTextProps } from "../../types/FilterCategory";

const ProductInfoText: FC<ProductInfoTextProps> = ({ name, value }) => {
  return (
    <p className="product-card-specifications-name">
      {name}
      <span className="product-card-specifications-value">{value}</span>
    </p>
  );
};

export default ProductInfoText;
