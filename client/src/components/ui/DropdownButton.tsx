import { TiArrowSortedDown } from "react-icons/ti";

const DropdownButton = ({
  dropdownFilterTitle,
  setToggleDropdownMenu,
  currentFilter,
}: any) => {
  return (
    <button className="dropdown-filter-button" onClick={setToggleDropdownMenu}>
      {currentFilter ? currentFilter : dropdownFilterTitle}
      <TiArrowSortedDown />
    </button>
  );
};

export default DropdownButton;
