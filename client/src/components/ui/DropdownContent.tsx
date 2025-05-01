import {
  DropdownContentProps,
  SetCurrentFilterProps,
} from "../../types/FilterCategory";

const DropdownContent: React.FC<
  DropdownContentProps & SetCurrentFilterProps
> = ({ dropdownFilterType, setCurrentFilter, activeFilters, category }) => {
  return (
    <div className="dropdown-content">
      {dropdownFilterType.map((item) => (
        <p
          key={item}
          onClick={() => setCurrentFilter(item, category)}
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
