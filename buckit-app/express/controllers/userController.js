"use strict"

const Models = require("../models");
const bcrypt = require('bcrypt');
const {createTokens} = require('../middleware/JWT')
const JWT = require('jsonwebtoken')

const registerUser = (data, res) => {
    bcrypt.hash(data.password, 10).then((hash) =>{
        Models.User.create({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone_number: data.phone_number,
            password: hash
        })
        .then(() => {
            console.log('User has successfully registered');
            res.send({ result: 200})
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });  
        })
    })
};

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Models.User.findOne({
        where: { email: email },
        attributes: ['user_id', 'email', 'password']
      });
  
      if (!user) {
        throw new Error('Invalid email');
      }
  
      const dbPassword = user.password;
      const match = await bcrypt.compare(password, dbPassword);
  
      if (!match) {
        throw new Error('Wrong Email and Password Combination!');
      } else {
        const accessToken = createTokens(user);
  
        console.log("Login Successful");
        res.json({ success: true, user_id: user.user_id, jwtToken: accessToken });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(400).json({ success: false, message: error.message });
    }
};
  

const getSubscriptionsByUser = async (req, res) => {
  const userId = req.params.user_id;
  await Models.Subscription.findAll({ where: { user_id: userId } })
    .then(subscriptions => {
      res.json(subscriptions);
    })
    .catch(error => {
      console.error('Error fetching subscriptions:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
}

const getUsers = async (req, res) => {
    try {
        const userId = req.params.user_id;
        const users = await Models.User.findAll({ where: { user_id: userId } });
        if (!users) {
            return res.status(404).json({ error: 'No users found' });
        }
        return res.json({ users });
    } catch (error) {
        console.log(error);
        if (res && res.status) { 
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
};

  


module.exports = {
    registerUser, loginUser, getUsers, getSubscriptionsByUser
}