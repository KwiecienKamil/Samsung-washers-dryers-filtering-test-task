import { useState } from "react";

const SelectProductButton = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div className="select-product-button-wrapper">
      <button
        className={
          isSelected ? "selected-product-button" : "select-product-button"
        }
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? "Wybrane" : "Wybierz"}
      </button>
    </div>
  );
};

export default SelectProductButton;
