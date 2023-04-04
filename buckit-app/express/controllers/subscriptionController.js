"use strict";

const Models = require("../models");

const addSubscriptions = (data, res) => {
    console.log(data);
    Models.Subscription.create({
      name: data.name,
      price: data.price,
      renewal_date: data.renewal_date,
      billing_cycle: data.billing_cycle,
      category: data.category,
      cancellation_reminder: data.cancellation_reminder,
      user_id: data.user_id
    })
    .then(() => {
        console.log('Subscription added successfully');
        res.send({ result: 200 })})
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateSubscriptions = (req, res) => {
    console.log(req.body)
    const subscriptionId = req.params.subscription_id;
    
    Models.Subscription.update(
      { 
        name: req.body.name, 
        price: req.body.price,
        category: req.body.category,
        renewal_date: req.body.renewal_date,
        billing_cycle: req.body.billing_cycle,
        cancellation_reminder: req.body.cancellation_reminder
      }, 
      { where: {subscription_id: subscriptionId}})
      .then(data => res.send({ success: true, message: 'Subscription updated successfully' }))
      .catch(err => { console.log(err); res.send({ result: 500, error: err.message }) })
}

const deleteSubscriptions = (req, res) => {
    console.log(req.params.subscription_id)
    const subscriptionID = req.params.subscription_id;
    Models.Subscription.destroy({ where: {subscription_id: subscriptionID }})
    .then(data => res.send({ success: true, message: 'Subscription Deleted' }))
    .catch(err => { console.log(err); res.send({result: 500, error: err.message})})

}

module.exports = {
    addSubscriptions, updateSubscriptions, deleteSubscriptions
}