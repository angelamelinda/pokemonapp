import React, { FC, ChangeEvent } from "react";
import { FilterSelect, FilterSelectItem } from "./index.styled";

interface IFilter {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  types: string[];
  filter: string;
}

const Filter: FC<IFilter> = ({ types, handleChange, filter }) => {
  return (
    <FilterSelect onChange={handleChange} value={filter}>
      <FilterSelectItem value={"default"}>default</FilterSelectItem>
      {types.map((type, idx) => (
        <FilterSelectItem key={idx} value={type}>
          {type}
        </FilterSelectItem>
      ))}
    </FilterSelect>
  );
};

export default Filter;
