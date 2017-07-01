exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', table => {
    table.increments('id').primary();
    table.text('city').notNull();
    table.text('state').notNull();
    table.text('zip_code').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location');
};
