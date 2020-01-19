import React from "react";
import { render } from "@testing-library/react";
import { COLOR } from "../../constants";
import BackButton from ".";

test("should BackButon have data-testid back-button", () => {
  const { getByTestId } = render(<BackButton />);

  expect(getByTestId("back-button")).toBeInTheDocument();
});

test("should BackButon as expected", () => {
  const { container } = render(<BackButton />);

  expect(container.innerHTML).toContain(
    `width=\"16\" height=\"16\" fill=\"#729f3f\"`
  );
});

test("should BackButon as expected (with width 20px & height 20px", () => {
  const { container } = render(<BackButton width={"20"} height={"20"} />);
  expect(container.innerHTML).toContain(
    `width=\"20\" height=\"20\" fill=\"#729f3f\"`
  );
});

test("should BackButon as expected (with color white)", () => {
  const { container } = render(<BackButton color={COLOR.WHITE} />);
  expect(container.innerHTML).toContain(
    `width=\"16\" height=\"16\" fill=\"#FFF\"`
  );
});
