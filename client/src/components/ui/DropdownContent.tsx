import {
  DropdownContentProps,
  SetCurrentFilterProps,
} from "../../types/FilterCategory";

const DropdownContent: React.FC<
  DropdownContentProps & SetCurrentFilterProps
> = ({ dropdownFilterType, setCurrentFilter, activeFilters }) => {
  return (
    <div className="dropdown-content">
      {dropdownFilterType.map((item) => (
        <p
          onClick={() => setCurrentFilter(item)}
          className={
            activeFilters.includes(item)
              ? "active-filter-element"
              : "filter-element"
          }
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default DropdownContent;
