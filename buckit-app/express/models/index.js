'use strict';

const Subscription = require('./subscription');
const User = require('./user')

async function init() {
    await Subscription.sync()
    await User.sync()
}

init();

module.exports = {
    Subscription, User
}