const mongoose = require('mongoose');

const ChemicalLevelsSchema = new mongoose.Schema({
    chlorine: { type: Number, required: true },
    ph: { type: Number, required: true },
    alkalinity: { type: Number, required: true },
    stabilizer: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChemicalLevels', ChemicalLevelsSchema);
