const pool = require("../../database");
const { addCompany } = require('./queries');

async function createCompany(req, res) {
  const { namec, codets } = req.body;
  try {
    const company = await addCompany(namec, codets );
    res.status(201).json(company);
  } catch (err) {
    console.error('Error creating company:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createCompany,
};
