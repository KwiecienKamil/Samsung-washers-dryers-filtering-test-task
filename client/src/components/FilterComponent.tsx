import { useState } from "react";
import { FilterCategoryProps } from "../types/FilterCategory";
import DropdownComponent from "./DropdownComponent";
const FilterComponent = ({
  title,
  dropdownFilterTitle,
  dropdownFilterType,
}: FilterCategoryProps) => {
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
        setToggleDropdownMenu={handleToggleMenu}
      />
    </div>
  );
};

export default FilterComponent;
