var mongoose = require('mongoose');

var questSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    topParticipants: { type: [String], default: [] },
    rating: { type: Number, default: 0, min: 0, max: 5 }
});

