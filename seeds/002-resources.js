exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('resources').insert([
                { resource_name: 'Library', description: 'Many books found here' },
                { resource_name: 'Laptop', description: 'Using downloaded PDFs' },
                { resource_name: 'Google', description: 'Searching for information' },
                { resource_name: 'Teachers', description: '' },

            ]);
        });
};