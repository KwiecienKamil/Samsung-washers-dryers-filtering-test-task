import {
  DisplayedProductsSetStateVoidProps,
  FilterDropdownProps,
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
  setToggleDropdownMenu,
}: DropdownComponentProps & DisplayedProductsSetStateVoidProps) => {
  const [currentFilter, setCurrentFilter] = useState("");

  const handleFilterChange = (item: string) => {
    setCurrentFilter(item);
    setAllDisplayedProducts(item);
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
        />
      )}
    </div>
  );
};

export default DropdownComponent;
