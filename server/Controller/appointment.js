
const Appointments = require('../Models/Appointments');

// Create a user
const createAppointment = async (req, res) => {
    const { user, doctor, date, time, bookingAt } = req.body;
    try {
        const appointment = new Appointments({ user, doctor, date, time, bookingAt });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAppointmentsById = async (req, res) => {
    const id = req.params.id
    try {
        // Assuming you have an Appointment model
        const appointment = await Appointments.find({user:id});
        console.log("appoint", appointment,id)

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createAppointment,
    getAppointmentsById
};
