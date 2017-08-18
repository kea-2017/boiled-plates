
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {id: 1, name: 'crazyness', symptoms: 'aarrg', patient_id: 1},
        {id: 2, name: 'crazyness', symptoms: 'aarrg', patient_id: 1},
        {id: 3, name: 'crazyness', symptoms: 'aarrg', patient_id: 1}
      ]);
    });
};
