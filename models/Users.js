let mongoose = require("mongoose");
let validator = require("validator");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: Date,
  updatedAt: Date,
});

userSchema.pre("save", function (next) {
  let now = Date.now();

  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model("Users", userSchema);
