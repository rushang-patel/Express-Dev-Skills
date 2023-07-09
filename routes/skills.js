const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// GET /skills
router.get('/', skillsCtrl.index);

// GET /skills/new
router.get('/new', skillsCtrl.new);

// POST /skills
router.post('/', skillsCtrl.create);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// POST /skills/:id/delete
router.post('/:id/delete', skillsCtrl.delete);

module.exports = router;