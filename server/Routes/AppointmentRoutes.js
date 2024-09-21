const express = require("express");
const { createAppointment, getAppointmentsById } = require("../Controller/appointment.js");

const router = express.Router();

// User routes
router.post('/create', createAppointment);
router.get('/get/:id', getAppointmentsById);


module.exports = router;