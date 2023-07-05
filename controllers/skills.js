const Skill = require('../models/skill');

function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', {
    skills,
    title: 'All Skills'
  });
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', {
    skill,
    title: 'Skill Details'
  });
}

module.exports = {
  index,
  show
};
