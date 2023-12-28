const user = require("../models/signup");
const helper2 = require("../middleware/helper")
const userId = helper2.userId();
module.exports = {
  experince: async (req, res) => {
    try {
      let add_data = await user.findByIdAndUpdate(
        { _id: userId },
        {
          experince: req.body.experince,
          decription: req.body.decription,
          skill: req.body.skill,
        }
      );

      const result = await add_data.save();
      return res.status(201).send({
        message: "User created successfully",
        success: true,
        add_data: result,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        code: 400,
        message: "something went wrong",
        body: {},
      });
    }
  },
};
  