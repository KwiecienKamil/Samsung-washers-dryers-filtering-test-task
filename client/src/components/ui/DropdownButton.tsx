import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const DropdownButton = ({
  dropdownFilterTitle,
  setToggleDropdownMenu,
  currentFilter,
}: any) => {
  return (
    <button className="dropdown-filter-button" onClick={setToggleDropdownMenu}>
      {currentFilter ? currentFilter : dropdownFilterTitle}
      <FaArrowDown />
    </button>
  );
};

export default DropdownButton;
