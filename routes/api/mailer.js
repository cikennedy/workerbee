import router from ("express").Router();
import nodemailer from 'nodemailer';

// matches with /api/jobs
router.post("/mailer", (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'workerbeeproject@gmail.com',
            pass: 'Workerbee2021!',
        },
        });
      
        // send mail with defined transport object
      let info = await  transporter.sendMail({
        from: '"Workerbee" <workerbeeproject@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: "workerbee - Someone has applied to your poster job!", // Subject line
        text: "Job Applied", // plain text body
        html: "HTML BODY MESSAGE", // html body
        });

        res.json('everything is good!')
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
})




module.exports = router;