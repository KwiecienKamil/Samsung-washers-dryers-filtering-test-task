import {
  DisplayedProductsSetStateVoidProps,
  DisplayedProductsStateProps,
  SearchSectionProps,
} from "../types/FilterCategory";
import FiltersSection from "./FiltersSection";
import Products from "./Products";
import SearchSection from "./SearchSection";

const Main = ({
  allDisplayedProducts,
  setAllDisplayedProducts,
  setSearchValue,
  activeFilters,
}: DisplayedProductsStateProps &
  DisplayedProductsSetStateVoidProps &
  SearchSectionProps &
  SearchSectionProps) => {
  return (
    <main>
      <SearchSection setSearchValue={setSearchValue} />
      <FiltersSection
        allDisplayedProducts={allDisplayedProducts}
        setAllDisplayedProducts={setAllDisplayedProducts}
        activeFilters={activeFilters}
      />
      <Products allDisplayedProducts={allDisplayedProducts} />
    </main>
  );
};

export default Main;
