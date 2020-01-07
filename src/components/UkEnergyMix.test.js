import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UkEnergyMix from "./UkEnergyMix";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders energy data from fetch", async () => {

  expect.assertions(2);

  const mockFetchPromise = Promise.resolve({
    json: () => Promise.resolve({
      data: {
        from:'2020-01-07T05:30Z',
        to:'2020-01-07T06:00Z'
      }
    })
  });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  await act(async () => {
    render(<UkEnergyMix />, container);
  });

  expect(global.fetch.mock.calls.length).toBe(1);

  expect(container.querySelector("p").textContent).toBe('From 2020-01-07T05:30Z to 2020-01-07T06:00Z');

  global.fetch.mockClear();
  delete global.fetch;
});
