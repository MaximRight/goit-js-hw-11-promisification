const delay = ms => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(ms);
    }, ms),
  );
};

const logger = time =>
  console.log(
    `%c Первое дз: Resolved after ${time}ms`,
    'color: green; font-size:16px',
  );

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
