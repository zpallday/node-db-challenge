
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          description: 'task description',
          notes: 'the task notes',
          completed: true
        },
        {
          project_id: 2,
          description: 'another task description',
          notes: 'the task notes',
          completed: true
        },
        {
          project_id: 3,
          description: 'Twist It',
          notes: 'Hello',
          completed: true,
        },
      ]);
    });
};
