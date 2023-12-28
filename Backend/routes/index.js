var express = require('express');
const signcontroller = require('../controller/signcontroller');
const basicController = require('../controller/basicController');
const eductionController = require('../controller/eductionController');
const experinceController = require('../controller/experinceController');
const persnolController = require('../controller/persnolController');
const domainController = require('../controller/domainController');
const loginController = require('../controller/loginController');
var router = express.Router();

router.post("/submit",signcontroller.signup)
router.post("/verify",signcontroller.verifyOtp)
router.post("/basic",basicController.basic)
router.post("/education",eductionController.eduction)
router.post("/experince",experinceController.experince)
router.post("/personal",persnolController.personal)
router.put("/basicUpdate",basicController.updateuser)
router.post("/domain", domainController.domain)
router.post("/login",loginController.postlogin);


module.exports = router;
