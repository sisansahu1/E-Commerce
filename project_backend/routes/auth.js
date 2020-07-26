const express= require('express')
const router = express.Router()
const {logOut} = require('../controllers/auth')

router.get('/logout',logOut);

module.exports = router;