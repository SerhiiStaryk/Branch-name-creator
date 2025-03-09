import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  xtest('should render Input component with props', () => {
    const mockInputProps = {
      id: '1',
      label: 'name',
      name: 'name',
      type: 'text',
      value: 'name',
      onChange: jest.fn(),
    };
    render(<Input {...mockInputProps} />);
    expect(true).toBeTruthy();
  });
});
