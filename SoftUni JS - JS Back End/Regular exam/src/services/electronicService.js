const Electronic = require("../models/Electronic");

exports.create = (electronicData) => Electronic.create(electronicData);
exports.getAll = () => Electronic.find();

exports.getSingleElectronic = (electronicId) =>
  Electronic.findById(electronicId).populate("buyingList");

exports.update = (electronicId, electronicData) =>
  Electronic.findByIdAndUpdate(electronicId, electronicData);

exports.delete = (electronicId) => Electronic.findByIdAndDelete(electronicId);

exports.getMyElectronics = (ownerId) =>
  Electronic.find({ owner: ownerId }).populate("owner");

exports.addToBuyingList = async (electronicId, userId) => {
  const electronic = await this.getSingleElectronic(electronicId);
  const existingInList = electronic.buyingList.some(
    (v) => v?.toString() === userId
  );

  if (existingInList) {
    return;
  }

  electronic.buyingList.push(userId);
  return electronic.save();
};


exports.getFilteredElectronics = async (searchName, searchType) => {
  let filteredElectronics = Electronic.find().lean();

  if (searchName) {
    filteredElectronics = await filteredElectronic.filter((electronic) =>
      electronic.name.toLowerCase().includes(searchName.toLowerCase)
    );
  }
  if (searchType) {
    filteredElectronics = await filteredElectronic.filter((electronic) =>
      electronic.type.toLowerCase().includes(searchType.toLowerCase)
    );
  }
  return filteredElectronics;
};

