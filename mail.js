const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth:{
        api_key:'d2c0a1bd1196eb612b18d59601bc6b97-913a5827-47b455cd',
        domain:'sandbox0f5be7b2376b4a1cb88a5925ad3ff8fa.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = () => {
    const mailOptions = {
        from: 'tariyelorujzade@gmail.com',
        to: 'tariyelorujzade@gmail.com',
        subject: 'testing 2',
        text: 'I would like to get in touch with you',
    
    };
    
    transporter.sendMail(mailOptions, function(err,data){
         if(err){
             console.log('error occurs')
         }else{
             console.log('message sent')
         }
    });

};

module.exports = sendMail;

