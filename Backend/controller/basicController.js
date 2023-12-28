const user = require("../models/signup");
const helper = require ("../middleware/image")
const helper2 =require("../middleware/helper")
const userId = helper2.userId()
console.log("🚀 ~ file: basicController.js:5 ~ userId:", userId)
module.exports = {
  
  basic:async (req,res) => {
   
    
    try {
      // console.log(req.files,"KKKKkkfiflfkffkfkfkfkfk");
      //   console.log(req.body,"KKKKKKKKKKKKKKKKYyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");return
        if (req.files && req.files.image) {
            var image = req.files.image;
          
            if (image) {
              
            image =await helper.fileUpload(image, "profile");
          
            }
          }
       

      let details_data = await user.findByIdAndUpdate({_id:userId},{
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        gender: req.body.gender,
        birthday: req.body.birthday,
        // about: req.body. about,
        file:image,
       
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
  updateuser:async(req, res) => {

    try
    {
        const userData = await user.findByIdAndUpdate({_id:userId},{ name: req.body.name,
          email: req.body.email,
          phonenumber: req.body.phonenumber,
          gender: req.body.gender,
          birthday: req.body.birthday,
        })

        return res.status(200).send({
            data:userData, 
            message:"User get Successfully",    
            success:true
        })
        
    } catch (error) {
       return res.status(400).send({
        message:"Entrnal Server Error",
        success:false,
        error:error.message
       }) 


    }
},

};

