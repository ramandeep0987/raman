const user = require("../models/signup");
const helper = require("../middleware/image"); 
const helper2 = require("../middleware/helper")
const userId = helper2.userId();
module.exports = {
  personal: async (req, res) => {
    try {
      if (req.files && req.files.image) {
        var image = req.files.image;

        if (image) {
          image = await helper.fileUpload(image, "profile");
        }
      }

      let add_data = await user.findByIdAndUpdate(
        { _id: userId },
        {
          address: req.body.address,
          idproof: req.body.idproof,
          file: image,
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
  updateuser: async (req, res) => {
    try {
      let {
        body: { address },
      } = req;
      const userData = await user.findByIdAndUpdate(
        { _id: req.params.id },
        { address }
      );
      return res.status(200).send({
        data: userData,
        message: "User get Successfully",
        success: true,
      });
    } catch (error) {
      return res.status(400).send({
        message: "Entrnal Server Error",
        success: false,
        error: error.message,
      });
    }
  },
};
