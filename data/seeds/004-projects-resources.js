
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects-resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects-resources').insert([
       {
        project_id: 1,
        resouce_id: 1
       },
      {
       project_id: 1,
       resouce_id: 2
      },
     {
      project_id: 2,
      resouce_id: 3
      }
      ]);
    });
};
