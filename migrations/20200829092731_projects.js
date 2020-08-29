
exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id');
        tbl.text('name', 150).notNull();
        tbl.text('description', 150);
        tbl.boolean('completed').defaultTo(false);
    })
        .createTable('tasks', tbl => {
            tbl.increments('id');
            tbl.text('description', 250).notNull();
            tbl.text('notes', 150);
            tbl.boolean('completed').defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNull()
                .references('id')
                .inTable('projects')
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('resource_name', 150).notNull();
            tbl.text('description', 250);
        })
        .createTable('project_resources', tbl => {
            tbl.increments("id");
            tbl.integer('project_id')
                .unsigned()
                .notNull()
                .references('id')
                .inTable('projects')
            tbl.integer('resource_id')
                .unsigned()
                .notNull()
                .references('id')
                .inTable('resources')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
};