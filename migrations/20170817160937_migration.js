
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('prescriptions', (table) => {
    table.increments('id')
    table.string('gp')
    table.string('drugs')
    table.string('condition')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('prescriptions')
};
