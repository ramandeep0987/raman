const mongoose = require("mongoose");
module.exports = async () => {

  mongoose.connect('mongodb+srv://r72721821:raman1567@cluster0.f44n339.mongodb.net/dummy',
    {
      useUnifiedTopology: true,
      usenewurlparser: true,
    }
  )
    .then(() => {
      console.log("connect");
    })
    .catch((err) => {
      console.log(err);
      console.log("disconnect");
    });
};
