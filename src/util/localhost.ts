export function setToLocalStorage(key: string, value: any) {
  const stringValue = typeof value !== 'string' ? JSON.stringify(value) : value.toString();

  localStorage.setItem(key, stringValue);
}

export function getFromLocalStorage(key: string) {
  const storedValue = localStorage.getItem(key);

  return storedValue ? JSON.parse(storedValue) : null;
}
