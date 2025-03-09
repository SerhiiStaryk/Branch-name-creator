const normalizeText = (text: string): string =>
  text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

const trimAndUppercase = (text: string): string => text.trim().toLocaleUpperCase();

export { normalizeText, trimAndUppercase };
