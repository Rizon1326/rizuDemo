const express = require('express');
const Caption = require('../models/Caption');
const router = express.Router();

// Route to retrieve a specific caption by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const caption = await Caption.findById(id);

    if (!caption) {
      return res.status(404).json({ message: 'Caption not found' });
    }

    res.json(caption);
  } catch (err) {
    console.error('Error retrieving caption:', err);
    res.status(500).json({ message: 'Error retrieving caption' });
  }
});

module.exports = router;
