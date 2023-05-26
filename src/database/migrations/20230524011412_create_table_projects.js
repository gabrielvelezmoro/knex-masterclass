const { onUpdateTrigger } = require('../../../knexfile')


exports.up = async (knex) => {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id')
        table.text('project_name').notNullable()
        table.bigInteger('user_id').references('id').inTable('users')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).then(() => {
        knex.raw(onUpdateTrigger('projects'))
    })
};

exports.down = async (knex) => {
    return knex.schema.dropTable('projects')
};
