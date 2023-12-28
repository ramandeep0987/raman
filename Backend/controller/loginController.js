const User = require("../models/signup");
var jwt = require("jsonwebtoken");

module.exports = {
  postlogin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email, password: password });
      var token = jwt.sign({ foo: "bar" }, "shhhhh");
      var obj = {
        user,
        token,
      };
      res.status(200).json(obj);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },
  
};
