/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Пример использование

const numberKey: KeyValuePair<number, string> = { key: 1, value: "One" };
const stringKey: KeyValuePair<string, boolean> = { key: "isTrue", value: true };

export {};
