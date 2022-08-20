// const log = require('../../helper/logger');
var nodemailer = require('nodemailer');
// let config = require('../../config.json');
// var fs = require('fs');

// router.post('/', (req, res) => {
module.exports = {
    sendMail: (data) => {
        return new Promise((resolve, reject) => {
            // log.debug('/api/sendnotification/', data);
            // console.log(config.auth.user, config.auth.pass);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "nikhilnirwan2000@gmail.com",
                    pass: "rprkeujlbmgjoosa"
                }
            });
            var abc = "nniku544@gmail.com"
            var mailOptions = {
                from: "nikhilnirwan2000@gmail.com",
                to:"nniku544@gmail.com",
                subject: `[Confirmation Mail] You have Successfully applied for 
                          a Recruitment Drive!`,
                html: `Hi <b>Nikhil Nirwan</b>, <br><br>
                       Congrastulation on taking action!<br><br>
                       ${abc}<br><br>
                       
                       You have successfully applied for Software<br><br>
                       
                       Developement Engineering Recruitment Drive at
                       "StartLazaa" Software Private Limited.<br><br>
                       
                       The recruitment will be conducted on the 
                       Teligram platform.<br><br>
                       
                       You will be notified if your application is
                       approved or rejected for the Recruitment Drive
                       after a thorough evaluation.<br><br>
                       
                       Happy Up - Skilling!<br><br>
                       
                       Regards<br><br>
                       StartLazaa `
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(info.response)
                }
            });
        })
    }
}
// });
// module.exports = router;
// {
//     out: "body",
//     subject: "subject",
//     email: "email",
//     from: ""
// }