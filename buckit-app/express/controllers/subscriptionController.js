"use strict";

const Models = require("../models");

const getSubscriptions = (res) => {
    Models.Subscription.findAll({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => { console.log(err); res.send({result: 500, error: err.message})})
};

const addSubscriptions = (data, res) => {
    console.log(data);
    Models.Subscription.create({
      name: data.name,
      price: data.price,
      renewalDate: data.renewalDate,
      billingCycle: data.billingCycle,
      category: data.category
    })
    .then(() => {
        console.log('Subscription added successfully');
        res.send({ result: 200 })})
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
  

module.exports = {
    getSubscriptions, addSubscriptions
}