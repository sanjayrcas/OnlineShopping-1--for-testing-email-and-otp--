// const nodemailer = require('nodemailer');

// let otpStore = {}; // email and otp will store temporary here

// exports.sendOtp = async (req, res) => {
//     const { email } = req.body;
//     const otp = Math.floor(100000 + Math.random() * 900000); // Generates 6 digit OTP

//     // Store OTP against email temporarily (for real apps use Redis or DB with expiry)
//     otpStore[email] = otp;

//     // Create transporter using environment variables
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER, 
//             pass: process.env.EMAIL_PASS  
//         }
//     });
//     console.log("Email User:", process.env.EMAIL_USER);
//     console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Your OTP for Signup Verification',
//         text: `Your OTP is ${otp}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).json({ message: 'Error sending email' });
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).json({ message: 'OTP sent successfully' });
//         }
//     });
// };

// exports.verifyOtp = (req, res) => {
//   const { email, otp } = req.body;

//   if (otpStore[email] && otpStore[email] == otp) {
//     delete otpStore[email]; // clear otp after success
//     res.status(200).json({ message: 'OTP verified successfully' });
//   } else {
//     res.status(400).json({ message: 'Invalid or expired OTP' });
//   }
// };

// NEW CODE FOR OTP VERIFICATION.

const sgMail = require('@sendgrid/mail');

let otpStore = {}; // temporary store for OTPs

// set API key from env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000); // 6 digit OTP

    // store OTP temporarily
    otpStore[email] = otp;

    const msg = {
        to: email,
        from: process.env.FROM_EMAIL, // must be a verified sender in SendGrid
        subject: 'Your OTP for Signup Verification',
        text: `Your OTP is ${otp}`,
    };

    try {
        await sgMail.send(msg);
        console.log(`OTP ${otp} sent to ${email}`);
        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error("SendGrid Error:", error);
        res.status(500).json({ message: 'Error sending OTP email', error });
    }
};

exports.verifyOtp = (req, res) => {
    const { email, otp } = req.body;

    if (otpStore[email] && otpStore[email] == otp) {
        delete otpStore[email]; // clear OTP after success
        res.status(200).json({ message: 'OTP verified successfully' });
    } else {
        res.status(400).json({ message: 'Invalid or expired OTP' });
    }
};
