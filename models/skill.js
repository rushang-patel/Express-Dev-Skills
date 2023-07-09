let skills = [
  {
    id: 125223,
    skill: 'JavaScript',
    description: 'JavaScript is a high-level, interpreted programming language that enables dynamic and interactive website development. It is widely used for adding interactivity, creating web applications, and enhancing user experience on the web.',
    experience: 'Intermediate'
  },
  {
    id: 127904,
    skill: 'Node.js',
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable and efficient server-side applications using JavaScript, leveraging its event-driven, non-blocking I/O model.",
    experience: 'Advanced'
  },
  {
    id: 139608,
    skill: 'Express',
    description: 'Express is a fast and minimalist web application framework for Node.js. It provides a robust set of features for building web applications, including routing, middleware support, template rendering, and simplified HTTP handling. Express allows developers to create server-side applications efficiently, enabling them to focus on building the core functionality of their web applications.',
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
