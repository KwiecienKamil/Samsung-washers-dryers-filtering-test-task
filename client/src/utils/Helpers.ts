import { FilterCategoryProps } from "../types/FilterCategory";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

export const filterCategories: FilterCategoryProps[] = [
  {
    title: "Sortuj po:",
    dropdownFilterTitle: "Popularność",
    dropdownFilterType: ["Wszystkie", "Cena", "Pojemność"],
  },
  {
    title: "Funkcje:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: [
      "Wszystkie",
      "Drzwi AddWash",
      "Panel AI Contorl",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
  },
  {
    title: "Klasa energetyczna:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: ["Wszystkie", "A", "B", "C", "D"],
  },
  {
    title: "Pojemność:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: ["Wszystkie", "9kg", "8kg", "10.5kg"],
  },
];

export const ProductsInfo = [
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    image: product3,
    capacity: "9",
    dimentions: "55 x 60 x 85",
    functions:
      "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClass: "A",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "2999",
    installments: "51,31 zł x 60 rat",
  },
  {
    title: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
    image: product2,
    capacity: "10,5",
    dimentions: "55 x 60 x 85",
    functions:
      "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClass: "A",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "3299",
    installments: "53,31 zł x 60 rat",
  },
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 8 kg, biała",
    image: product1,
    capacity: "8",
    dimentions: "55 x 60 x 85",
    functions:
      "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClass: "A",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "3999",
    installments: "55,31 zł x 60 rat",
  },
];
