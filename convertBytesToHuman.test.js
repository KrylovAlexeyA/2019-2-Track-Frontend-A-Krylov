/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  // ...
});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-Infinity)).toBe(false)
  expect(convertBytesToHuman({some: 'object'})).toBe(false)
  expect(convertBytesToHuman(['a', 'r', 'r', 'a', 'y'])).toBe(false)
  expect(convertBytesToHuman({})).toBe(false)
  expect(convertBytesToHuman([])).toBe(false)
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1000 * 1.23)).toBe("1.201 KB")
  expect(convertBytesToHuman(1024*1024 * 2.12312)).toBe("2.123 MB")
  expect(convertBytesToHuman(1024 * 1024 * 1024 * 3.123231)).toBe("3.123 GB")
  // ...
});


// другая группа проверок
