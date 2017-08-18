exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('patients', (table) => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.integer('phone')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('patients')
};
