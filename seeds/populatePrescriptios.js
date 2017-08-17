
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prescriptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('prescriptions').insert([
        {id: 1, gp: 'Papa Larzaru', drugs: 'Dopamine', condition: 'Sadness'},
        {id: 2, gp: 'Frankinstein', drugs: 'Oxytocin', condition: 'Tristess'},
        {id: 3, gp: 'Rug', drugs: 'Chocolate', condition: 'BooHoo'}
      ]);
    });
};
