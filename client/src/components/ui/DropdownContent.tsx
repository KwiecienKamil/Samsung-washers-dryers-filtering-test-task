import { DropdownContentProps } from "../../types/FilterCategory";

const DropdownContent: React.FC<DropdownContentProps> = ({
  dropdownFilterType,
}) => {
  return (
    <div className="dropdown-content">
      {dropdownFilterType.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default DropdownContent;
