import { filterCategories } from "../utils/Helpers";
import { FilterCategory } from "../types/FilterCategory";
import FilterComponent from "./FilterComponent";

const FiltersSection = () => {
  return (
    <section id="filters-section">
      {filterCategories.map((category: FilterCategory) => (
        <FilterComponent title={category.title} />
      ))}
    </section>
  );
};

export default FiltersSection;
