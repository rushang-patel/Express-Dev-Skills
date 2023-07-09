let skills = [
  {
    id: 125223,
    skill: 'JavaScript',
    description: 'A high-level, interpreted programming language',
    experience: 'Intermediate'
  },
  {
    id: 127904,
    skill: 'Node.js',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    experience: 'Advanced'
  },
  {
    id: 139608,
    skill: 'Express',
    description: 'A fast, unopinionated web application framework for Node.js',
    experience: 'Intermediate'
  }
];

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}

function addSkill(skill, description, experience) {
  const newSkill = {
    id: Date.now(),
    skill,
    description,
    experience
  };
  skills.push(newSkill);
}

function deleteSkill(id) {
  id = parseInt(id);
  skills = skills.filter(skill => skill.id !== id);
}

module.exports = {
  getAll,
  getOne,
  addSkill,
  deleteSkill
};
