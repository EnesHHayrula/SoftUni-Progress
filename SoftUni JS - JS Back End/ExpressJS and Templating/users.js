const users = [];

exports.addUser = (name, age) => {
  users.push({ name, age });
};

exports.getUsers = () => users.slice();
