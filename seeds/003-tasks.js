exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('tasks').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('tasks').insert([
                { description: 'Go over TK', notes: 'Review each subtopic and watch videos', completed: false, project_id: 1 },
                { description: 'Watch Lecture', notes: 'Take notes', completed: false, project_id: 2 },
                { description: 'Begin project', notes: '', completed: false, project_id: 3 },


            ]);
        });
};