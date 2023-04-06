const express = require("express");
const router = express.Router();
const Controllers = require('../controllers')
const cron = require('node-cron')

cron.schedule('21 20 * * *', () => {
  Controllers.emailController.notifyUser();
});

router.get('/notify-user', async (req, res) => {
  Controllers.emailController.notifyUser();
});

module.exports = router;