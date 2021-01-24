// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    Promise.all(updatedUsers).then(console.table);
    //   callback(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

// Promise.all(promises)
//   .then(results => {
//     console.log(
//       '%c 📝 Заезд окончен, принимаются ставки.',
//       'color: blue; font-size: 16px;',
//     );
//     console.table(results);
//   })
//   .catch(console.log);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
