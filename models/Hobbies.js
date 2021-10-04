let mongoose = require('mongoose');
let validator = require('validator');

let hobbySchema = new mongoose.Schema({
    passion: {
        type: String
      },
    name: {
        type: String
    },
    year: {
        type: String
    },
    userId: {
        type: String
    },
    createdAt: Date,
    updatedAt: Date
});


hobbySchema.pre('save', function(next) {
  let now = Date.now();

  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
});


module.exports = mongoose.model('Hobbies', hobbySchema);
