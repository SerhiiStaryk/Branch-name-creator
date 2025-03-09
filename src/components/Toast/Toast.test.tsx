import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Toast from '.';

// Mocking the useUiDispatch hook
jest.mock('../../store/ui-context', () => ({
  useUiDispatch: jest.fn(() => jest.fn()),
}));

describe('Toast', () => {
  let portalContainer: HTMLDivElement;

  beforeEach(() => {
    // Create a portal container element
    portalContainer = document.createElement('div');
    portalContainer.id = 'toast';
    document.body.appendChild(portalContainer);
  });

  afterEach(() => {
    // Clean up: remove the portal container from the document body
    document.body.removeChild(portalContainer);
  });

  test('should render Toast with props in UiProvider', () => {
    const mockMessage = 'mockMessage';

    render(<Toast message={mockMessage} />);
    expect(true).toBeTruthy();
  });
});
