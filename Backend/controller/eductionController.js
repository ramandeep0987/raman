const user = require("../models/signup");
const helper = require("../middleware/image")
const helper2 = require("../middleware/helper")
const userId = helper2.userId();
module.exports = {

  eduction:async (req,res) => {
    
    try {
      // console.log(req.files,"KKKKkkfiflfkffkfkfkfkfk");
      //   console.log(req.body,"KKKKKKKKKKKKKKKKYyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");return
        if (req.files && req.files.image) {
            var image = req.files.image;
          
            if (image) {
              
            image =await helper.fileUpload(image, "profile");
          
            }
          }
       

      let details_data = await basicdetails.findByIdAndUpdate({_id:userId},{
        eduction: req.body.eduction,
        stream: req.body.stream,
        fulltime: req.body.fulltime,
        parttime: req.body.parttime,
        file: image,
      });
      
      const result = await details_data.save()
                  return res.status(201).send({
                      message: "create successfully",
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

