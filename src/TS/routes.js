// routes.js
const express = require("express");
const { createCompany } = require('./controller');

const router = express.Router();

// Define routes
router.post('/', createCompany);

module.exports = router;
