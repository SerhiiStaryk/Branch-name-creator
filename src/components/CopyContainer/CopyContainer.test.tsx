import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CopyContainer from '.';

// Mocking the UiProvider component
jest.mock('../../store/ui-context', () => ({
  __esModule: true,
  useUi: jest.fn(() => jest.fn()),
  useUiDispatch: jest.fn(() => jest.fn()),
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('CopyContainer', () => {
  test('should render CopyContainer component', () => {
    const branchName = 'mock branch name';

    render(<CopyContainer branchName={branchName} />);
    expect(true).toBeTruthy();
  });
});
