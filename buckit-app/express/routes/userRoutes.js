const express = require("express");
const router = express.Router();
const Controllers = require('../controllers')
const { validateToken } = require('../middleware/JWT')

router.post('/signup', (req, res) => {
    Controllers.userController.registerUser(req.body, res);
})

router.post('/login', (req, res) => {
    Controllers.userController.loginUser(req, res);
})

router.get('/:user_id', validateToken, (req, res) => {
    Controllers.userController.getSubscriptionsByUser(req, res)
})

router.get('/user-search/:user_id', validateToken, (req, res) => {
    Controllers.userController.getUsers(req, res)
})

module.exports = router;