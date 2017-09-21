
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {id: 1, Drname: 'Papa Larzaru', speciality: 'cosmetic', location: 'here', patient_id: 1},
        {id: 2, Drname: 'Papa Larzaru', speciality: 'cosmetic', location: 'here', patient_id: 1},
        {id: 3, Drname: 'Papa Larzaru', speciality: 'cosmetic', location: 'here', patient_id: 1}
      ]);
    });
};
