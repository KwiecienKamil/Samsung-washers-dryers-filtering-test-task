import { FaArrowDown } from "react-icons/fa";

const DropdownButton = ({
  dropdownFilterTitle,
  setToggleDropdownMenu,
}: any) => {
  return (
    <button className="dropdown-filter-button" onClick={setToggleDropdownMenu}>
      {dropdownFilterTitle}
      <FaArrowDown />
    </button>
  );
};

export default DropdownButton;
