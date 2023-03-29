'use strict';

const Subscription = require('./subscription');

async function init() {
    await Subscription.sync()
}

init();

module.exports = {
    Subscription
}