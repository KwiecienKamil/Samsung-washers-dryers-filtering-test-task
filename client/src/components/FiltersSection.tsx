import { filterCategories } from "../utils/Helpers";
import { FilterCategoryProps } from "../types/FilterCategory";
import FilterComponent from "./FilterComponent";
import ProductCounter from "./ProductCounter";

const FiltersSection = () => {
  return (
    <>
      <section id="filters-section">
        {filterCategories.map((category: FilterCategoryProps) => (
          <FilterComponent
            title={category.title}
            dropdownFilterTitle={category.dropdownFilterTitle}
            dropdownFilterType={category.dropdownFilterType}
          />
        ))}
      </section>
      <ProductCounter />
    </>
  );
};

export default FiltersSection;
