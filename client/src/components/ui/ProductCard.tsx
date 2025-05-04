import { FC } from "react";
import {ProductCardProps} from "../../types/FilterCategory";
import ProductInfoText from "./ProductInfoText";
import PriceDisplay from "./PriceDisplay";
import EnergyClassComponent from "./EnergyClassComponent";
import SelectProductButton from "./SelectProductButton";

const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  capacity,
  dimentions,
  functions,
  energyClassImg,
  timePeriod,
  price,
  installments,
}) => {
  return (
    <div className="product-card">
      <img src={`${import.meta.env.VITE_API_URL}${image}`} alt={title} />
      <h3>{title}</h3>
      <div className="product-card-specifications">
        <ProductInfoText name="Pojemność (kg) :" value={capacity} />
        <ProductInfoText name="Wymiary (GxSxW) :" value={dimentions} />
        <ProductInfoText name="Funkcje: " value={functions} />
        <EnergyClassComponent energyClassImg={energyClassImg} />
        <ProductInfoText name="Cena obowiązuje: " value={timePeriod} />
        <PriceDisplay price={price} />
        <p id="product-card-specifications-installments">{installments}</p>
        <SelectProductButton />
      </div>
    </div>
  );
};

export default ProductCard;
