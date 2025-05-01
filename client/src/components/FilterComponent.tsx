import { useState } from "react";
import {
  DisplayedProductsSetStateVoidProps,
  FilterCategoryProps,
} from "../types/FilterCategory";
import DropdownComponent from "./DropdownComponent";
const FilterComponent = ({
  title,
  dropdownFilterTitle,
  dropdownFilterType,
  activeFilters,
  category,
  setAllDisplayedProducts,
}: FilterCategoryProps & DisplayedProductsSetStateVoidProps) => {
  const [toggleDropdownMenu, setToggleDropdownMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleDropdownMenu(!toggleDropdownMenu);
  };
  return (
    <div className="filter-component">
      <h2>{title}</h2>
      <DropdownComponent
        dropdownFilterTitle={dropdownFilterTitle}
        dropdownFilterType={dropdownFilterType}
        toggleDropdownMenu={toggleDropdownMenu}
        category={category}
        setToggleDropdownMenu={handleToggleMenu}
        setAllDisplayedProducts={setAllDisplayedProducts}
        activeFilters={activeFilters}
      />
    </div>
  );
};

export default FilterComponent;
