import { FilterCategoryProps } from "../types/FilterCategory";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import classA from "../assets/A.png";
import classB from "../assets/B.png";
import classC from "../assets/C.png";
import classD from "../assets/D.png";
import classE from "../assets/E.png";
import classF from "../assets/F.png";

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
    dropdownFilterType: ["Wszystkie", "A", "B", "C", "D"],
  },
  {
    category: "capacity",
    title: "Pojemność:",
    dropdownFilterTitle: "Pokaż wszystkie",
    dropdownFilterType: ["Wszystkie", "8kg", "9kg", "10.5kg"],
  },
];

export const ProductsInfo = [
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    image: product3,
    capacity: "9kg",
    dimentions: "55 x 60 x 85 cm",
    functions:
      "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClassImg: classA,
    energyClass: "A",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "2999",
    installments: "51,31 zł x 60 rat",
  },
  {
    title: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
    image: product2,
    capacity: "10.5kg",
    dimentions: "55 x 60 x 85 cm",
    functions: "Drzwi AddWash™, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClassImg: classB,
    energyClass: "B",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "3299",
    installments: "53,31 zł x 60 rat",
  },
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 8 kg, biała",
    image: product1,
    capacity: "8kg",
    dimentions: "55 x 60 x 85 cm",
    functions: "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy",
    energyClassImg: classC,
    energyClass: "C",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "3999",
    installments: "55,31 zł x 60 rat",
  },
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    image: product3,
    capacity: "9kg",
    dimentions: "55 x 60 x 85 cm",
    functions:
      "Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClassImg: classD,
    energyClass: "D",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "3499",
    installments: "51,31 zł x 60 rat",
  },
  {
    title: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
    image: product2,
    capacity: "10.5kg",
    dimentions: "55 x 60 x 85 cm",
    functions: "Drzwi AddWash™, Wyświetlacz elektroniczny",
    energyClassImg: classE,
    energyClass: "E",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "2499",
    installments: "53,31 zł x 60 rat",
  },
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 8 kg, biała",
    image: product1,
    capacity: "8kg",
    dimentions: "55 x 60 x 85 cm",
    functions:
      "Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClassImg: classF,
    energyClass: "F",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "4299",
    installments: "55,31 zł x 60 rat",
  },
  {
    title: "WW10T654DLH, Pralka, 8 kg, biała",
    image: product2,
    capacity: "8kg",
    dimentions: "55 x 60 x 85 cm",
    functions: "Wyświetlacz elektroniczny",
    energyClassImg: classF,
    energyClass: "F",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "1999",
    installments: "53,31 zł x 60 rat",
  },
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    image: product1,
    capacity: "9kg",
    dimentions: "55 x 60 x 85 cm",
    functions: "Panel AI Control, Wyświetlacz elektroniczny",
    energyClassImg: classC,
    energyClass: "C",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "3400",
    installments: "55,31 zł x 60 rat",
  },
  {
    title: "WW90T754ABT, Pralka QuickDrive™, 10,5 kg, biała",
    image: product1,
    capacity: "10.5kg",
    dimentions: "55 x 60 x 85 cm",
    functions: "Drzwi AddWash™, Panel AI Control",
    energyClassImg: classF,
    energyClass: "F",
    timePeriod: "15.09.2022 - 21.09.2022",
    price: "2200",
    installments: "55,31 zł x 60 rat",
  },
];
