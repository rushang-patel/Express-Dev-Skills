const skills = [
  {
    id: 125223,
    skill: 'JavaScript',
    description: 'A high-level, interpreted programming language',
    experience: 'Intermediate'
  },
  {
    id: 127904,
    skill: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    experience: 'Advanced'
  },
  {
    id: 139608,
    skill: 'Express',
    description: 'A fast, unopinionated web application framework for Node.js',
    experience: 'Intermediate'
  }
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}
