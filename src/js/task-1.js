const delay = ms => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(ms);
    }, ms),
  );
  // Твой код
};

// '%c Заезд окончен, принимаются ставки.',
//   'color: blue; font-size: 16px;',

const logger = time =>
  console.log(
    `%c Первое дз: Resolved after ${time}ms`,
    'color: green; font-size:16px',
  );

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.
