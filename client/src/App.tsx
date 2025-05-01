import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.css";
import { filterCategories, ProductsInfo } from "./utils/Helpers";

function App() {
  const [allDisplayedProducts, setAllDisplayedProducts] =
    useState(ProductsInfo);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterProducts = (filterType: string, categoryKey: string) => {
    let updatedFilters: string[];

    if (filterType === "Wszystkie" && categoryKey) {
      const category = filterCategories.find(
        (filterCategory) => filterCategory.category === categoryKey
      );
      const optionsToRemove =
        category?.dropdownFilterType.filter(
          (filterType) => filterType !== "Wszystkie"
        ) || [];
      updatedFilters = activeFilters.filter(
        (activeFilter) => !optionsToRemove.includes(activeFilter)
      );
    } else {
      if (activeFilters.includes(filterType)) {
        updatedFilters = activeFilters.filter(
          (activeFilter) => activeFilter !== filterType
        );
      } else {
        updatedFilters = [...activeFilters, filterType];
      }
    }
    setActiveFilters(updatedFilters);

    const sortByPrice = updatedFilters.includes("Cena");
    const sortByCapacity = updatedFilters.includes("Pojemność");

    const functionFilters = updatedFilters.filter((filterCategory) =>
      filterCategories
        .find((filterCategory) => filterCategory.category === "functions")
        ?.dropdownFilterType.includes(filterCategory)
    );

    const energyClassFilters = updatedFilters.filter((filterCategory) =>
      filterCategories
        .find((filterCategory) => filterCategory.category === "energy")
        ?.dropdownFilterType.includes(filterCategory)
    );

    const capacityFilters = updatedFilters.filter((filterCategory) =>
      filterCategories
        .find((filterCategory) => filterCategory.category === "capacity")
        ?.dropdownFilterType.includes(filterCategory)
    );

    const filtered = ProductsInfo.filter((product) => {
      const matchesFunctions = functionFilters.every(
        (matchingFunctionFilters) =>
          product.functions.includes(matchingFunctionFilters)
      );
      const matchesEnergy =
        energyClassFilters.length === 0 ||
        energyClassFilters.includes(product.energyClass);
      const matchesCapacity =
        capacityFilters.length === 0 ||
        capacityFilters.includes(product.capacity);
      return matchesFunctions && matchesEnergy && matchesCapacity;
    });
    if (sortByPrice) {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortByCapacity) {
      filtered.sort((a, b) => parseFloat(a.capacity) - parseFloat(b.capacity));
    }
    setAllDisplayedProducts(filtered);
  };

  return (
    <div id="wrapper">
      <Header />
      <Main
        allDisplayedProducts={allDisplayedProducts}
        setAllDisplayedProducts={filterProducts}
        activeFilters={activeFilters}
      />
    </div>
  );
}

export default App;
