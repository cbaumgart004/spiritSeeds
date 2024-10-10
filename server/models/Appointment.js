const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
    serviceType: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
        trim: true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;