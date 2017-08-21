
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: '', password: ''},
        {id: 2, username: '', password: ''},
        {id: 3, username: '', password: ''}
      ]);
    });
};
