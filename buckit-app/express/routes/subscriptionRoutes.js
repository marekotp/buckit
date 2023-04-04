const express = require("express");
const router = express.Router();
const Controllers = require('../controllers')

router.get('/', (req, res) => {
      Controllers.subscriptionController.getSubscriptions(req, res);
  });  

router.post('/add-subscription', (req, res) => {
    Controllers.subscriptionController.addSubscriptions(req.body, res);
})

router.put('/:subscription_id', (req, res) => {
  Controllers.subscriptionController.updateSubscriptions(req, res);
})

router.delete('/:subscription_id', (req, res) => {
  Controllers.subscriptionController.deleteSubscriptions(req, res);
})

module.exports = router
