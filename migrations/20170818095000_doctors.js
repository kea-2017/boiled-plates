exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('doctors', (table) => {
    table.increments('id')
    table.string('Drname')
    table.string('speciality')
    table.string('location')
    table.integer('patient_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('doctors')
};
