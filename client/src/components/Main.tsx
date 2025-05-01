import {
  DisplayedProductsSetStateVoidProps,
  DisplayedProductsStateProps,
} from "../types/FilterCategory";
import FiltersSection from "./FiltersSection";
import Products from "./Products";
import SearchSection from "./SearchSection";

const Main = ({
  allDisplayedProducts,
  setAllDisplayedProducts,
  activeFilters,
}: DisplayedProductsStateProps & DisplayedProductsSetStateVoidProps) => {
  return (
    <main>
      <SearchSection />
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
