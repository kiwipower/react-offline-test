import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Doughnuts from "./doughnuts";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders doughnuts", () => {
  expect.assertions(5);
  const generationmixStubData = [
    {
      fuel: 'gas',
      perc: 20
    },
    {
      fuel: 'wind',
      perc: 50
    }
  ];

  act(() => {
    render(<Doughnuts />, container);
  });
  expect(container.textContent).toBe("Something went wrong");

  act(() => {
    render(<Doughnuts generationmix={generationmixStubData} />, container);
  });
  expect(container.querySelector(".doughnut-perc-label").textContent).toBe("20%");
  expect(container.querySelector(".doughnut-fuel-label").textContent).toBe("gas");
  expect(container.querySelectorAll(".doughnuts-grid-item svg").length).toBe(2);
  expect(container.querySelector(".doughnuts-grid-item style").textContent).toBe(".dougnut-animate-gas {stroke-dasharray:20 80}");

});
