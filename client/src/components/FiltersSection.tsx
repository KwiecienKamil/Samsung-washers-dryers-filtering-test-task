import { filterCategories } from "../utils/Helpers";
import {
  DisplayedProductsSetStateVoidProps,
  DisplayedProductsStateProps,
  FilterCategoryProps,
} from "../types/FilterCategory";
import FilterComponent from "./FilterComponent";
import ProductCounter from "./ProductCounter";

const FiltersSection = ({
  allDisplayedProducts,
  setAllDisplayedProducts,
  activeFilters,
}: DisplayedProductsStateProps & DisplayedProductsSetStateVoidProps) => {
  return (
    <>
      <section id="filters-section">
        {filterCategories.map((category: FilterCategoryProps, index) => (
          <FilterComponent
            key={index}
            category={category.category}
            title={category.title}
            dropdownFilterTitle={category.dropdownFilterTitle}
            dropdownFilterType={category.dropdownFilterType}
            setAllDisplayedProducts={setAllDisplayedProducts}
            activeFilters={activeFilters}
          />
        ))}
      </section>
      <ProductCounter allDisplayedProducts={allDisplayedProducts} />
    </>
  );
};

export default FiltersSection;
