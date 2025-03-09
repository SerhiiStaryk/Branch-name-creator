import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CreateForm from '.';

describe('CreateForm', () => {
  test('should render render CreateForm component', () => {
    const mockFn = () => {};
    render(<CreateForm onSetBranchName={mockFn} />);
    expect(true).toBeTruthy();
  });
});
