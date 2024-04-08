
const pool = require('../../database');

async function addCompany(namec, codets ) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const insertQuery = 'INSERT INTO companies (namec, codets) VALUES ($1, $2) RETURNING *';
    const values = [namec, codets];
    const result = await client.query(insertQuery, values);
    

// Create a automate schema for the new company
const createSchemaQuery = `CREATE SCHEMA IF NOT EXISTS ${namec.toLowerCase()}`;
await client.query(createSchemaQuery);


    await client.query('COMMIT');
    return result.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

module.exports = {
  addCompany,
};
