
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
            name: 'USA somthing',
            description: 'Track your projects',
            completed: false
        },
        {
            name: 'Rehab',
            description: 'Say not to drugs',
            completed: true
        }
      ]);
    });
};
