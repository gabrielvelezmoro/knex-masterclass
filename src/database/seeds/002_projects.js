/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    { project_name: 'meu projeto', user_id: 23 }
  ]);
};
