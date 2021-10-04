let Users = require("../models/Users");

exports.getUsers = (req, res) => {
  Users.find()
    .lean()
    .then(function (users) {
      if (!users) {
        res.json({
          status: "ERROR",
          message: "Users not found",
          data: [],
        });
      } else {
        res.json({
          status: "OK",
          message: "Users Retrieved",
          data: users,
        });
      }
    });
};

exports.addUser = (req, res) => {
  let userObj = {
    name: req.body.name,
  };

  const newUser = new Users(userObj);
  newUser.save(async (err, user) => {
    if (err) {
      res.json({
        status: "ERROR",
        message: err,
      });
    } else {
      res.json({
        status: "OK",
        message: "Users Created",
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  Users.remove({ _id: req.body.id }, function (err) {
    if (!err) {
      res.json({
        status: "ERROR",
        message: err,
      });
    } else {
      res.json({
        status: "OK",
        message: "User Deleted",
      });
    }
  });
};
