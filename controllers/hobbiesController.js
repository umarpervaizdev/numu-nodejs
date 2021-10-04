let Hobbies = require("../models/Hobbies");

exports.getHobbies = (req, res) => {
  Hobbies.find({ userId: req.body.id })
    .lean()
    .then(function (hobbies) {
      if (!hobbies) {
        res.json({
          status: "ERROR",
          message: "Hobbies not found",
          data: [],
        });
      } else {
        res.json({
          status: "OK",
          message: "Hobbies Retrieved",
          data: hobbies,
        });
      }
    });
};

exports.addHobby = (req, res) => {
  let hobbyObj = {
    passion: req.body.passion,
    name: req.body.name,
    year: req.body.year,
    userId: req.body.userId,
  };

  const newHobby = new Hobbies(hobbyObj);
  newHobby.save(async (err, hobby) => {
    if (err) {
      res.json({
        status: "ERROR",
        message: err,
      });
    } else {
      res.json({
        status: "OK",
        message: "hobbies Created",
      });
    }
  });
};

exports.deleteHobby = (req, res) => {
  Hobbies.remove({ _id: req.body.id }, function (err) {
    if (!err) {
      res.json({
        status: "ERROR",
        message: err,
      });
    } else {
      res.json({
        status: "OK",
        message: "Hobby Deleted",
      });
    }
  });
};
