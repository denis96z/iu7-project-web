var mongoose = require('mongoose');

mongoose.model('quest', {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    location: { type: [Number, Number], 'default': null },
    topParticipants: { type: [String], 'default': [] },
    rating: { type: Number, 'default': 0, min: 0, max: 5 }
});