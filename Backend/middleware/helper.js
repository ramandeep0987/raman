module.exports = {

    userId:()=>{
        return "65097965bb8ecec67f5959f5"
    },
    checkValidation: async (v) => {
      var errorsResponse;
  
      await v.check().then(function (matched) {
        if (!matched) {
          var valdErrors = v.errors;
          var respErrors = [];
          Object.keys(valdErrors).forEach(function (key) {
            if (valdErrors && valdErrors[key] && valdErrors[key].message) {
              respErrors.push(valdErrors[key].message);
            }
          });
          errorsResponse = respErrors.join(", ");
        }
      });
      return errorsResponse;
    },
  
    failed: (res, message = "") => {
      message =
        typeof message === "object"
          ? message.message
            ? message.message
            : ""
          : message;
      return res.status(400).json({
        success: false,
        code: 400,
        message: message,
        body: {},
      });
    },
    success: (res, message = "", body = {}) => {
      return res.status(200).json({
        success: true,
        code: 200,
        message: message,
        body: body,
      });
    },
  };
  












