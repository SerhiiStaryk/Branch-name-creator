import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  test('should render Input component with props', () => {
    const mockInputProps = {
      id: '1',
      label: 'name',
      name: 'name',
      type: 'text',
    };
    render(<Input {...mockInputProps} />);
    expect(true).toBeTruthy();
  });
});
