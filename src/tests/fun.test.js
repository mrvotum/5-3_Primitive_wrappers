import characterInfo from '../js/characterInfo';

test('Маг', () => {
  const inputArr = {
    name: 'Маг',
    type: 'Magician',
    health: 90,
    level: 13,
    attack: 70,
    defence: 40,
  };

  const expected = '🧐 М(13) ⚔70 🛡40 ❤90'; // ожидает

  const received = characterInfo(inputArr); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Лучник', () => {
  const inputArr = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const expected = '😠 Л(1) ⚔40 🛡10 ❤50'; // ожидает

  const received = characterInfo(inputArr); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Лучник', () => {
  const inputArr = {
    name: 'Зомби',
    type: 'Zombie',
    health: 5,
    level: 3,
    attack: 20,
    defence: 5,
  };

  const expected = '🧟 З(3) ⚔20 🛡5 ❤5'; // ожидает

  const received = characterInfo(inputArr); // получает
  expect(received).toEqual(expected); // сравнивает
});
