const cats = [];
const uuid = require("uuid");

exports.create = (catData) => {
  const newCat = {
    id: uuid(),
    ...cubeData,
  };
  cats.push(newCat);
  return newCat;
};

exports.getAll = (search) => {
  let filteredCats = [...cats];
  if (search) {
    filteredCats = filteredCats.filter((cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filteredCats;
};

exports.getSingleCat = (id) => {
  return cats.find((cat) => cat.id === id);
};
