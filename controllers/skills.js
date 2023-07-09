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

function newSkill(req, res) {
  res.render('skills/newSkills', {
    title: 'Input Skills'
  });
}

function create(req, res) {
  const { skill, description, experience } = req.body;
  Skill.addSkill(skill, description, experience);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  const skillId = req.params.id;
  Skill.deleteSkill(skillId);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};
