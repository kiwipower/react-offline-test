import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Bars from './bars';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders bars', () => {
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
    render(<Bars />, container);
  });
  expect(container.textContent).toBe('Something went wrong');

  act(() => {
    render(<Bars generationmix={generationmixStubData} />, container);
  });
  expect(container.querySelector('.bars-grid-item-sides').textContent).toBe('gas');
  expect(container.querySelector('.bar-percentage').textContent).toBe('20%');
  expect(container.querySelectorAll('.bars-grid').length).toBe(2);
  expect(container.querySelector('.bar').style.width).toBe('40%');

});
