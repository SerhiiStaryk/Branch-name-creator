import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CreateForm from '.';

describe('CreateForm', () => {
  test('should render render CreateForm component', () => {
    const mockFn = jest.fn();
    render(<CreateForm onSetBranchNameAndCommit={mockFn} />);
    expect(true).toBeTruthy();
  });
});
