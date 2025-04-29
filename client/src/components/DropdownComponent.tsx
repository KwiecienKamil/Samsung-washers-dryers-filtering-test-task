import { FilterDropdownProps } from "../types/FilterCategory";
import DropdownButton from "./ui/DropdownButton";
import DropdownContent from "./ui/DropdownContent";
import { ToggleDropdownMenuProps } from "../types/FilterCategory";

type DropdownComponentProps = FilterDropdownProps & ToggleDropdownMenuProps;

const DropdownComponent = ({
  dropdownFilterTitle,
  dropdownFilterType,
  toggleDropdownMenu,
  setToggleDropdownMenu,
}: DropdownComponentProps) => {
  return (
    <div className="dropdown-component">
      <DropdownButton
        dropdownFilterTitle={dropdownFilterTitle}
        setToggleDropdownMenu={setToggleDropdownMenu}
      />
      {toggleDropdownMenu && (
        <DropdownContent dropdownFilterType={dropdownFilterType} />
      )}
    </div>
  );
};

export default DropdownComponent;
