import { FilterCategoryProps } from "../types/FilterCategory";

export const filterCategories: FilterCategoryProps[] = [
  {
    category: "sorting",
    title: "Sortuj po:",
    dropdownFilterTitle: "Popularność",
    dropdownFilterType: ["Wszystkie", "Cena", "Pojemność"],
  },
  {
    category: "functions",
    title: "Funkcje:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: [
      "Wszystkie",
      "Drzwi AddWash",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
  },
  {
    category: "energy",
    title: "Klasa energetyczna:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: ["Wszystkie", "A", "B", "C", "D", "E", "F"],
  },
  {
    category: "capacity",
    title: "Pojemność:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: ["Wszystkie", "8kg", "9kg", "10.5kg"],
  },
];
