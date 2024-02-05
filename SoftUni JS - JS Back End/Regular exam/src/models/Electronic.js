const mongoose = require("mongoose");

const electronicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 10,
    message: "Name should be at least 10 characters!",
  },
  type: { type: String, required: true, minLength: 2 },
  damages: { type: String, required: true, minLength: 10 },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Provide valid creature image link!"],
  },
  description: { type: String, required: true, minLength: 10, maxLength: 200 },
  productionYear: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value >= 1900 && value <= 2023,
    },
  },
  exploitationYear: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value > 0,
      message: "Exploitation should be a positive number.",
    },
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value > 0,
      message: "Price should be a positive number.",
    },
  },
  buyingList: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Electronic = mongoose.model("Electronic", electronicSchema);
module.exports = Electronic;
