exports.seed = function (knex) {
  // Deletes existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts
      return knex('projects').insert([
        { name: 'Lambda Hw1', description: 'Node install', completed: true },
        { name: 'Study for DB1', description: 'Go over training kit', completed: true },
        { name: 'Study for DB2', description: 'Go over TK', completed: false },
      ]);
    });
};