import { normalizeText, trimAndUppercase } from './text';

describe('normalizeText function', () => {
  it('should normalize text by trimming, converting to lowercase, and replacing non-alphanumeric characters with dashes', () => {
    const inputText = '  Hello, World!  ';
    const expectedOutput = 'hello-world';

    expect(normalizeText(inputText)).toBe(expectedOutput);
  });

  it('should handle empty string', () => {
    const inputText = '';
    const expectedOutput = '';

    expect(normalizeText(inputText)).toBe(expectedOutput);
  });

  it('should handle text with special characters', () => {
    const inputText = 'Special Characters@123';
    const expectedOutput = 'special-characters123';

    expect(normalizeText(inputText)).toBe(expectedOutput);
  });
});

describe('trimAndUppercase function', () => {
  it('should trim leading and trailing whitespaces and convert text to uppercase', () => {
    const inputText = '  hello, world!  ';
    const expectedOutput = 'HELLO, WORLD!';

    expect(trimAndUppercase(inputText)).toBe(expectedOutput);
  });

  it('should handle empty string', () => {
    const inputText = '';
    const expectedOutput = '';

    expect(trimAndUppercase(inputText)).toBe(expectedOutput);
  });

  it('should handle text with special characters', () => {
    const inputText = 'Special~Characters@123';
    const expectedOutput = 'SPECIAL~CHARACTERS@123';

    expect(trimAndUppercase(inputText)).toBe(expectedOutput);
  });
});
