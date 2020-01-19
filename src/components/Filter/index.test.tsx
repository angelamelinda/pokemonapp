import React, { ChangeEvent } from "react";
import { render } from "@testing-library/react";
import Filter from ".";

test("should contains bug when render Filter", () => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => jest.fn();
  const filter = "bug";
  const types = ["bug"];
  const { container } = render(
    <Filter filter={filter} types={types} handleChange={handleChange} />
  );
  expect(container.innerHTML).toContain("bug");
});
