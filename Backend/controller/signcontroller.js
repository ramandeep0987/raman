const user = require("../models/signup");
const nodemailer = require("nodemailer");
const { Validator } = require("node-input-validator");
const helper = require("../middleware/helper");
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f2090f1a179df5",
    pass: "ee3b7a49d45b1e",
  },
});

module.exports = {
  signup: async (req, res) => {
    try {
      const v = new Validator(req.body, {
        email: "required|email",
        password: "required|minLength:6|maxLength:6",
        name: "required",
        phonenumber: "required|integer|minLength:10|maxLength:15",
      });
      let errorsResponse = await helper.checkValidation(v);

      if (errorsResponse) {
        return helper.failed(res, errorsResponse);
      }

      const otp = Math.floor(1000 + Math.random() * 9000);

      let data = await user.findOne({ email: req.body.email })
      // console.log(data)
      if (data) {
        return res.status(402).send({
          message: "User already registered ",
          success: true
        });
      }
      // let get = await user.countDocuments()
      //       let ids = get.length  + 1

      let add_data = await user.create({
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password,
        passwordconfirm: req.body.passwordconfirm,
        otp: otp,

      });
      const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subjec t line
        text: "Hello world?", // plain text body
        html: `<b>Otp : ${otp}</b>`, // html body
      });

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
  verifyOtp: async (req, res) => {
    try {
      const v = new Validator(req.body, {
        email: "required|email",
        otp: "required|integer|minLength:4|maxLength:4",
      });
      let errorsResponse = await helper.checkValidation(v);

      if (errorsResponse) {
        return helper.failed(res, errorsResponse);
      }

      const isEmailExist = await user.findOne({ email: req.body.email });

      if (!isEmailExist) {
        return helper.failed(res, "email not found");
      }

      if (isEmailExist.otp !== req.body.otp) {
        return helper.failed(res, "otp is not valid");
      }

      const result = await user.findByIdAndUpdate(
        { _id: isEmailExist._id },
        {
          otp: "",
          isVerified: true,
        }
      );

      if (result) {
        return helper.success(res, "otp verified success");
      }
      return helper.failed(res, "Something went wrong");
    } catch (error) {
      console.log("🚀  file: dbcon.js:72  verifyOtp: ~ error:", error);
    }
  },
};
