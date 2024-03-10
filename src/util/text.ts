export const normalizeText = (text: string): string => {
  // Trim leading and trailing whitespaces
  const trimmedText = text.trim();

  // Convert to lowercase
  const lowercaseText = trimmedText.toLowerCase();

  // Replace non-alphanumeric characters with dashes
  const normalizedText = lowercaseText.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

  return normalizedText;
};

export const trimAndUppercase = (text: string): string => {
  // Trim leading and trailing whitespaces
  const trimmedText = text.trim();

  // Convert to uppercase
  const uppercaseText = trimmedText.toLocaleUpperCase();

  return uppercaseText;
};
