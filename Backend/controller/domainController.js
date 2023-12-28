const user = require("../models/signup");
module.exports = {

  domain: async (req,res) => {
    
    try {

      let domains = [];

      if (req.body && typeof req.body.domain === 'string') {
        domains = req.body.domain.split(",");
      }
      let add_data = await user.create({
        domains: domains,
       
      });
      
      const result = await add_data.save()
                  return res.status(201).send({
                      message: "User created successfully",
                      success: true,
                      add_data:result,
                    });

    
    }
    catch (error) {
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

