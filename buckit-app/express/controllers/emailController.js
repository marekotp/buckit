"use strict"
const sgMail = require('@sendgrid/mail');
const moment = require('moment');
const Models = require('../models');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const notifyUser = async () => {
    const subscriptions = await Models.Subscription.findAll({
        where: {
          cancellation_reminder: true,
          renewal_date: moment().add(7, 'days').toDate(),
        },
        include: [{ model: Models.User, as: 'user' }],
      });
    
      subscriptions.forEach((subscription) => {
        const { user } = subscription;
    
        sgMail.send({
          to: {
            email: user.email,
            name: user.first_name,
          },
          from: {
            email: 'ENTER YOUR EMAIL IN HERE',
            name: 'Buckit',
          },
          templateId: '',
          dynamicTemplateData: {
            name: user.first_name,
            subName: subscription.name
          }
        }).then(() => {
          console.log(`Cancellation reminder email sent to ${user.email}`);
        });
      });
};

module.exports = {
    notifyUser
}