exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('doctors', (table) => {
    table.increments('id')
    table.string('name')
    table.string('speciality')
    table.string('location')
    table.string('patient_id')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('doctors')
};
