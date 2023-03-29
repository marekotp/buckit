const express = require("express");
const router = express.Router();
const Controllers = require('../controllers')

router.get('/', (req, res) => {
    Controllers.subscriptionController.getSubscriptions(res);

})

router.post('/add-subscription', (req, res) => {
    Controllers.subscriptionController.addSubscriptions(req.body, res);
})

module.exports = router
