import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.css";
import { filterCategories } from "./utils/Helpers";
import axios from "axios";
import { ProductProps } from "./types/FilterCategory";

function App() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [allDisplayedProducts, setAllDisplayedProducts] = useState<
    ProductProps[]
  >([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/getProducts`)
      .then((response) => {
        setAllProducts(response.data);
        setAllDisplayedProducts(response.data);
      })
      .catch((error) => {
        console.log("Failed: ", error);
      });
  }, []);

  useEffect(() => {
    applyAllFilters(activeFilters, searchValue);
  }, [activeFilters, searchValue, allProducts]);

  const applyAllFilters = (allFilters: string[], search: string) => {
    const sortByPrice = allFilters.includes("Cena");
    const sortByCapacity = allFilters.includes("Pojemność");


    const functionFilters = allFilters.filter((filterCategory) =>
      filterCategories
        .find((functionCategory) => functionCategory.category === "functions")?.dropdownFilterType.includes(filterCategory)
    );

    const energyClassFilters = allFilters.filter((filterCategory) =>
      filterCategories
        .find((energyCategory) => energyCategory.category === "energy")?.dropdownFilterType.includes(filterCategory)
    );

    const capacityFilters = allFilters.filter((filterCategory) =>
      filterCategories
        .find((capacityCategory) => capacityCategory.category === "capacity")?.dropdownFilterType.includes(filterCategory)
    );

    let filtered = allProducts.filter((product) => {
      
      const matchesFunctions = functionFilters.every((matchingFunction) =>
        product.functions.includes(matchingFunction)
      );
      
      const matchesEnergy =
        energyClassFilters.length === 0 || energyClassFilters.includes(product.energyClass);
      
      const matchesCapacity =
        capacityFilters.length === 0 || capacityFilters.includes(product.capacity);


      return matchesFunctions && matchesEnergy && matchesCapacity;
    });

    if (sortByPrice) {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortByCapacity) {
      filtered.sort((a, b) => parseFloat(a.capacity) - parseFloat(b.capacity));
    }

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setAllDisplayedProducts(filtered);
  };

  const filterProducts = (filterType: string, categoryKey: string) => {
    let updatedFilters: string[];

    if (filterType === "Wszystkie" && categoryKey) {
      
      const category = filterCategories.find(
        (filterCategoriesCategory) => filterCategoriesCategory.category === categoryKey
      );
      const optionsToRemove =
        category?.dropdownFilterType.filter((type) => type !== "Wszystkie") || [];
        updatedFilters = activeFilters.filter((filter) => !optionsToRemove.includes(filter)
      );
    } else {
      if (activeFilters.includes(filterType)) {
        updatedFilters = activeFilters.filter((filter) => filter !== filterType);
      } else {
        updatedFilters = [...activeFilters, filterType];
      }
    }
    setActiveFilters(updatedFilters);
  };

  return (
    <div id="wrapper">
      <Header />
      <Main
        allDisplayedProducts={allDisplayedProducts}
        setAllDisplayedProducts={filterProducts}
        activeFilters={activeFilters}
        setSearchValue={handleSearch}
      />
    </div>
  );
}

export default App;
