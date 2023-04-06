# buckit

My capstone project is called Buckit - a subscription tracking service that makes managing subscriptions easy. Buckit helps track your subscription payments, to ensure that you are aware of your subscriptions, their costs, and their renewal date. We aim to help save money where ever we can!

# Installation

1. To install Buckit simply clone this repository into VS Code.

2. Next, insure the follow dependencies are installed:

Front-End:
── @emotion/react@11.10.6
├── @emotion/styled@11.10.6
├── @mui/icons-material@5.11.11
├── @mui/material@5.11.14
├── @testing-library/jest-dom@5.16.5
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── axios@1.3.4
├── bootstrap@5.2.3
├── express@4.18.2
├── jwt-decode@3.1.2
├── material-ui-colors@1.0.0
├── nodemon@2.0.21
├── react-apexcharts@1.4.0
├── react-bootstrap@2.7.2
├── react-dom@18.2.0
├── react-hook-form@7.43.8
├── react-router-bootstrap@0.26.2
├── react-router-dom@6.9.0
├── react-scripts@5.0.1
├── react@18.2.0
└── web-vitals@2.1.4

Back-End:
├── @sendgrid/mail@7.7.0
├── bcrypt@5.1.0
├── cors@2.8.5
├── dotenv@16.0.3
├── express@4.18.2
├── jsonwebtoken@9.0.0
├── jwt-decode@3.1.2
├── moment@2.29.4
├── mysql2@3.2.0
├── node-cron@3.0.2
└── sequelize@6.29.3

3. Now, you should have Express and React installed and ready to go. We now want to set up a database. To do this you will need to have mySQL Workbench installed and have a database created.

4. After this, create a dotenv file in the Express App. In this file you will fill out the following.

    DB_NAME= *DATEBASE NAME IN MYSQL*
    DB_USER=root //This can stay the same
    DB_PASSWORD= *YOUR MYSQL PASSWORD*
    DB_HOST=localhost //This can stay the same
    DB_PORT=3307 //This can stay the same

    PORT=3001 //This can stay the same, just ensure it is the same port that is showing on line 30 in the Express server.js file.

5. Now that your dotenv file is done, when you start the application the database should intialise and create 2 tables in your existing mySQL database one for Users and one for Subscribers.

6. Next let's sort out our JWT Token in the middleware folder of Express folder. If you examine that file upon line 5 & 12 you should find this process.env.SECRET_KEY. Now this line of is important to verify a user's token and ensuring they only have access to their information. What we will now do is go back to our env file and insert this into it -

    SECRET_KEY=*REPLACE THIS WITH YOUR SECRET KEY (YOU CAN JUST MAKE IT UP BUT ENSURE IT IS A SAFE SECRET KEY).

7. Lastly, we want to set up our email system. For this you will need to make a free account using SendGrid. Then follow SendGrid's instructions to link your account to a VSCode File. The main thing to do is to insert the SendGrid API Key, that they provide you, into your env file too, like this...

    SENDGRID_API_KEY=*KEY GOES HERE*

You can also edit the sgMail.send call on line 20 of the Email controller to use your own credentials and templates. Templates can be made within your SendGrid Account and you can insert the link for the template on line 29. Line 30 use dynamicTemplateData to put information from the database into the email template. Name and subName are currently in their, however you can add as much extra information as you want - you must ensure in the tempalte that they are called using double curly brackets like {{Name}} or {{subName}}.

8. Finally, after all these steps upon npm start everything should intialise correctly!



I hope you are able to get it working for any questions regarding any errors that may appear please contact me - marekotp@gmail.com

