import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card, { CardWrapper } from '../Card';
import 'jest-styled-components';

afterEach(cleanup);

describe('Unit tests for the Card & CardWrapper Component', () => {
  describe('Visual Snapshot testing', () => {
    it('Card - Renders without crashing', () => {
      const { container } = render(
        <Card title="title of card">Internal Children</Card>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('CardWrapper - Renders without crashing', () => {
      const { container } = render(
        <CardWrapper>
          <Card title="title1">Internal Children 1</Card>
          <Card title="title2">Internal Children 2</Card>
        </CardWrapper>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Functional unit tests', () => {
    it('Card - it should have specific parts', () => {
      const { getByText } = render(
        <Card title="title of card">
          <div>Internal Children</div>
        </Card>,
      );

      expect(getByText('title of card')).toBeTruthy();
      expect(getByText('Internal Children')).toBeTruthy();
    });

    it('CardWrapper - it should have specific parts', () => {
      const { getByText } = render(
        <CardWrapper>
          <Card title="title1">
            <div>Internal Children 1</div>
          </Card>
          <Card title="title2">
            <div>Internal Children 2</div>
          </Card>
        </CardWrapper>,
      );

      expect(getByText('title1')).toBeTruthy();
      expect(getByText('Internal Children 1')).toBeTruthy();
      expect(getByText('title2')).toBeTruthy();
      expect(getByText('Internal Children 2')).toBeTruthy();
    });
  });
});
