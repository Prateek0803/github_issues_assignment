const router            = require('express').Router()
const userController    = require('../controllers/user.js') 

router.post('/register',    userController.userRegister)
router.post('/login',       userController.userLogin)


module.exports = router;