import { SearchSectionProps } from "../types/FilterCategory";

const SearchSection = ({ setSearchValue }: SearchSectionProps) => {
  return (
    <section id="search-section">
      <input
        id="search-section-input"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </section>
  );
};

export default SearchSection;
