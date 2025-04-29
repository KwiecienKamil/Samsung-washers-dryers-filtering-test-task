export type FilterCategoryProps = {
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
};

export type ToggleDropdownMenuProps = {
  toggleDropdownMenu: boolean;
  setToggleDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProductCardProps = {
  title: string;
  image: string;
  capacity: string;
  dimentions: string;
  functions: string;
  energyClass: string;
  timePeriod: string;
  price: string;
  installments: string;
};
