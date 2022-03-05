
exports.up = function(knex, Promise) {
    return knex.schema.createTable('motorista', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('caminhao').notNull()
        table.string('endereco').notNull()
        table.integer('users_id').references('id').inTable('users')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('motorista')
};
