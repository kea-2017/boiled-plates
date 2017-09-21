
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, name: 'Papa Larzaru', address: 'circus', phone: '0272846315', email: 'dave@dave.com'},
        {id: 2, name: 'Papa Larzaru', address: 'circus', phone: '0272846315', email: 'dave@dave.com'},
        {id: 3, name: 'Papa Larzaru', address: 'circus', phone: '0272846315', email: 'dave@dave.com'}
      ]);
    });
};
