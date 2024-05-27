const express = require('express');
const ChemicalLevels = require('../models/ChemicalLevels');
const router = express.Router();

// Create new chemical level entry
router.post('/chemical-levels', async (req, res) => {
    try {
        const newEntry = new ChemicalLevels(req.body);
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all chemical level entries
router.get('/chemical-levels', async (req, res) => {
    try {
        const entries = await ChemicalLevels.find();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
