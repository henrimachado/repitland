import React from "react";
import { CiSearch } from "react-icons/ci";
import { FilterContainer } from "./Filter.style";

interface IFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter = ({ filter, setFilter }: IFilterProps) => {
  return (
    <FilterContainer >
      <CiSearch className="icon" />
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={({ target }) => setFilter(target.value)}
        value={filter}
      />
    </FilterContainer>
  );
};

export default Filter;
