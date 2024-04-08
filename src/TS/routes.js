
const express = require("express");
const { createCompany } = require('./controller');

const router = express.Router();


router.post('/', createCompany);

module.exports = router;
