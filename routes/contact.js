const express = require('express');
const router = express.Router();

const { contactController } = require("../controllers/contact")

// Actual Route
router.post("/contact", contactController)


module.exports = router;