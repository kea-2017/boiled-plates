
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('prescriptions', (table) => {
    table.increments('id')
    table.string('drugs')
    table.string('dosage')
    table.string('schedule')
    table.integer('patient_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('prescriptions')
};
