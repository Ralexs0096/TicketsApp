import { useState, useCallback } from 'react';

function parseJSON<T>(value: string | null, initialValue: T): T {
  try {
    return value === 'undefined' ? initialValue : JSON.parse(value ?? '');
  } catch (error) {
    console.error('Parsing error on retrieved item:', error);
    return initialValue;
  }
}

/**
 * A custom React Hook to synchronize state with the browser's localStorage.
 *
 * @template T The type of the value being stored.
 * @param {string} key The key under which the value will be stored in localStorage.
 * @param {T} initialValue The default value to use if nothing is found in localStorage.
 * @returns {[T, (value: T | ((val: T) => T)) => void]} A tuple of the state value and a setter function.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON<T>(item, initialValue) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error writing to localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}
