import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ThemeSwitcher from '.';

describe('ThemeSwitcher', () => {
  test('should render ThemeSwitcher', () => {
    render(<ThemeSwitcher isDarkMode={true} toggleTheme={() => {}} />);
    expect(true).toBeTruthy();
  });
});
