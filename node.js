var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: 'sirkaushal@outlook.com',
        pass: '*****'
    }
});

var mailOptions = {
    from: 'sirkaushal@outlook.com',
    to: 'sirkaushalkumar@gmail.com',
    subject: 'Hello ',
    text: 'Hello world ',
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});