import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.css";
import { ProductsInfo } from "./utils/Helpers";

function App() {
  const [allDisplayedProducts, setAllDisplayedProducts] =
    useState(ProductsInfo);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterProducts = (filterType: string) => {
    let updatedFilters: string[];

    if (activeFilters.includes(filterType)) {
      updatedFilters = activeFilters.filter((filter) => filter !== filterType);
    } else {
      updatedFilters = [...activeFilters, filterType];
    }

    setActiveFilters(updatedFilters);

    if (updatedFilters.length === 0) {
      setAllDisplayedProducts(ProductsInfo);
      return;
    }

    const sortByPrice = updatedFilters.includes("Cena");
    const sortByCapacity = updatedFilters.includes("Pojemność");

    const functionFilters = updatedFilters.filter((filter) =>
      [
        "Drzwi AddWash",
        "Silnik inwerterowy",
        "Wyświetlacz elektroniczny",
        "Panel AI Control",
      ].includes(filter)
    );

    const energyClassFilters = updatedFilters.filter((filter) =>
      ["A", "B", "C", "D", "E", "F"].includes(filter)
    );

    const capacityFilters = updatedFilters.filter((filter) =>
      ["8kg", "9kg", "10.5kg"].includes(filter)
    );

    const filtered = ProductsInfo.filter((product) => {
      const matchesFunctions = functionFilters.every((functionThatMatches) =>
        product.functions.includes(functionThatMatches)
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
    console.log(activeFilters);
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
