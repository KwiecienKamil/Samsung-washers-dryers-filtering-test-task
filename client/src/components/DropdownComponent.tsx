import {
  DisplayedProductsSetStateVoidProps,
  FilterDropdownProps,
  ProductCategoryprops,
} from "../types/FilterCategory";
import DropdownButton from "./ui/DropdownButton";
import DropdownContent from "./ui/DropdownContent";
import { ToggleDropdownMenuProps } from "../types/FilterCategory";
import { useState } from "react";

type DropdownComponentProps = FilterDropdownProps & ToggleDropdownMenuProps;

const DropdownComponent = ({
  dropdownFilterTitle,
  dropdownFilterType,
  toggleDropdownMenu,
  setAllDisplayedProducts,
  activeFilters,
  category,
  setToggleDropdownMenu,
}: DropdownComponentProps &
  DisplayedProductsSetStateVoidProps &
  ProductCategoryprops) => {
  const [currentFilter, setCurrentFilter] = useState("");

  const handleFilterChange = (item: string) => {
    setCurrentFilter(item);
    setAllDisplayedProducts(item, category);
  };
  return (
    <div className="dropdown-component">
      <DropdownButton
        dropdownFilterTitle={dropdownFilterTitle}
        setToggleDropdownMenu={setToggleDropdownMenu}
        currentFilter={currentFilter}
      />
      {toggleDropdownMenu && (
        <DropdownContent
          dropdownFilterType={dropdownFilterType}
          setCurrentFilter={handleFilterChange}
          activeFilters={activeFilters}
          category={category}
        />
      )}
    </div>
  );
};

export default DropdownComponent;
