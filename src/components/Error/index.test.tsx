import React from "react";
import { render } from "@testing-library/react";
import Error from ".";
import { ERROR_MESSAGE } from "../../constants";

test("should Error have data-testid error-message", () => {
  const { getByTestId } = render(<Error message={ERROR_MESSAGE.DEFAULT} />);

  expect(getByTestId("error-message")).toBeInTheDocument();
});
