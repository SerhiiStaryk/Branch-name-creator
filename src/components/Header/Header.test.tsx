import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  test('should render Header component', () => {
    render(<Header />);
    expect(true).toBeTruthy;
  });
});
