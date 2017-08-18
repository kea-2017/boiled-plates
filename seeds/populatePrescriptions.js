
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prescriptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('prescriptions').insert([
        {id: 1, drugs: 'Dopamine', dose: 'lots', schedule: 'now', patient_id: 1},
        {id: 2, drugs: 'Dopamine', dose: 'lots', schedule: 'now', patient_id: 1},
        {id: 3, drugs: 'Dopamine', dose: 'lots', schedule: 'now', patient_id: 1}
      ]);
    });
};
