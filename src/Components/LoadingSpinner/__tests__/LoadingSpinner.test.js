import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingSpinner from '../LoadingSpinner';
import 'jest-styled-components';

afterEach(cleanup);

describe('Unit tests for the LoadingSpinner component', () => {
  describe('Visual Snapshot testing', () => {
    it('Renders without crashing', () => {
      const { container } = render(<LoadingSpinner />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Functional unit tests', () => {
    it('it applies default styles', () => {
      const tree = renderer.create(<LoadingSpinner />).toJSON();
      expect(tree).toHaveStyleRule('display', 'flex');
      expect(tree).toHaveStyleRule('width', '100vw');
      expect(tree).toHaveStyleRule('height', '100vh');
      expect(tree).toHaveStyleRule('align-items', 'center');
    });
  });
});
