const { create } = require("domain");

exports.up = function(knex, Promise) {
    return knex.schema.createTable('viagem', table => {
        table.increments('id').primary()
        table.dateTime('data_hora').notNull()
        table.string('local_entrega').notNull()
        table.string('local_saida').notNull()
        table.integer('km_total_entre_cidades').notNull()
        table.integer('motorista_id').references('id').inTable('motorista').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('viagem')
};
