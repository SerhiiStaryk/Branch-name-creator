import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

// Mocking the UiProvider component
jest.mock('./store/ui-context', () => ({
  __esModule: true,
  useUi: jest.fn(() => jest.fn()),
  useUiDispatch: jest.fn(() => jest.fn()),
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('App', () => {
  test('shoud render App', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
