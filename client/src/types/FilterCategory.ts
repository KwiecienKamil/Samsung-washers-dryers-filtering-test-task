export interface ProductProps {
  title: string;
  image: string;
  capacity: string;
  dimentions: string;
  functions: string;
  energyClassImg: string;
  energyClass: string;
  timePeriod: string;
  price: string;
  installments: string;
}

export interface ProductInfoTextDisplayProps {
  title: string;
  image: string;
  capacity: string;
  dimentions: string;
  functions: string;
  energyClassImg: string;
  energyClass: string;
  timePeriod: string;
  price: string;
  installments: string;
}

export type FilterCategoryProps = {
  category: string;
  title: string;
  dropdownFilterTitle: string;
  dropdownFilterType: string[];
};

export type FilterDropdownProps = {
  dropdownFilterTitle: string;
  dropdownFilterType: string[];
};

export type DropdownContentProps = {
  dropdownFilterType: string[];
  category: string;
};

export type ProductCategoryprops = {
  category: string;
};

export type ToggleDropdownMenuProps = {
  toggleDropdownMenu: boolean;
  setToggleDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ProductCardProps {
  title: string;
  image: string;
  capacity: string;
  dimentions: string;
  functions: string;
  energyClassImg: string;
  timePeriod: string;
  price: string;
  installments: string;
}

export type SetCurrentFilterProps = {
  setCurrentFilter: any;
  activeFilters: string[];
};

export type ProductInfoTextProps = {
  name: string;
  value: string;
};

export type EnergyClassComponentProps = {
  energyClassImg: string;
};

export type DisplayedProductsStateProps = {
  allDisplayedProducts: ProductProps[];
};

export type DisplayedProductsSetStateProps = {
  setAllDisplayedProducts: React.Dispatch<
    React.SetStateAction<ProductCardProps[]>
  >;
};

export type DisplayedProductsSetStateVoidProps = {
  setAllDisplayedProducts: (filterType: string, category: string) => void;
  activeFilters: string[];
};

export type DisplayedProductsStateManagementAppProps = {
  allDisplayedProducts: ProductCardProps[];
  setAllDisplayedProducts: React.Dispatch<
    React.SetStateAction<ProductCardProps[]>
  >;
};

export type HandleFilterChangeProps = {
  allDisplayedProducts: ProductCardProps[];
  handleFilters: (updatedFilters?: {
    functions: string[];
    capacity: string;
    energyClass: string;
    priceRange: [number, number];
  }) => void;
  filters: {
    functions: string[];
    capacity: string;
    energyClass: string;
    priceRange: [number, number];
  };
};

export type SearchSectionProps = {
  setSearchValue: (value: string) => void;
};

export type ShowMoreButtonProps = {
  showMoreProducts: () => void;
  isAllVisible: boolean;
};
