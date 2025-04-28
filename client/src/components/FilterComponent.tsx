import { FilterCategory } from "../types/FilterCategory";

const FilterComponent = ({ title }: FilterCategory) => {
  return (
    <div className="filter-component">
      <h2>{title}</h2>
      <input />
    </div>
  );
};

export default FilterComponent;
