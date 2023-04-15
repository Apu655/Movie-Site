const {
  create,
  getUsers,
  getUserByEmail,
  deleteUser,
} = require("./user.service");
const { hashSync, genSaltSync, compareSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        succes: 1,
        data: results,
      });
    });
  },
  login: (req, res) => {
    const { email, password } = req.body;
    console.log("Email :", email);
    getUserByEmail(email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          succes: 0,
          data: `Invalid email or password ${results}`,
        });
      }
      const result = compareSync(password,results.password);
      console.log("The result is :",result)
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "Login Successfully",
          token: jsontoken,
          result:result,
        });
      } else {
        return res.json({
          success: 0,
          data: `Wrong Password`,
        });
      }
    });
  },
  deleteUser: (req, res) => {
    const { id } = req.body;
    deleteUser(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "User Deleted Successfully",
      });
    });
  },
};
