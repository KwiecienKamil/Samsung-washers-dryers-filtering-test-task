import { FC } from "react";
import { ProductCardProps } from "../../types/FilterCategory";

const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  capacity,
  dimentions,
  functions,
  energyClass,
  timePeriod,
  price,
  installments,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <div className="product-card-specification">
        <p>{capacity}</p>
        <p>{dimentions}</p>
        <p>{functions}</p>
        <p>{energyClass}</p>
        <p>{timePeriod}</p>
        <p>{price}</p>
        <p>{installments}</p>
      </div>
    </div>
  );
};

export default ProductCard;
