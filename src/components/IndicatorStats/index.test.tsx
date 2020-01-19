import React, { ChangeEvent } from "react";
import { render } from "@testing-library/react";
import IndicatorStats from ".";

test("should have width=30 when render IndicatorStats", () => {
  const name = "Flying";
  const baseStat = 30;
  const { container } = render(
    <IndicatorStats name={name} baseStat={baseStat} />
  );

  expect(container.innerHTML).toContain(`width="30"`);
});
