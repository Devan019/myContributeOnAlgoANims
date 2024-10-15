const MailSender = require('nodemailer');

async function sendmail(email){
    let from = "devanchauhan012@gmail.com";
    const Transport = MailSender.createTransport({
        host: "smtp.gmail.com",
        port: 587, 
        secure: false,
        auth: {
            user: from,
            pass: "vxnp qqkp mumh ihyv", 
        }
    }
    )


    const send = await Transport.sendMail({
        from : from,
        to : email,
        subject : `Change your password`,
        text : `Change your password`,
        html :`<div>
            <h1>for change your password click on this <a href="http://localhost:5173/login/forgetpassword/changepassword">Link</a></h1>
        </div>`
    })
}


module.exports = sendmail;