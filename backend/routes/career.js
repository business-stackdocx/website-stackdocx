// routes/career.js
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append date to filename
  },
});

const upload = multer({ storage: storage });

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Route to handle career application submissions
router.post('/apply', upload.single('resume'), (req, res) => {
  const { fullName, email, phone, message } = req.body;
  const resume = req.file; // Get the uploaded resume

  // Check if resume was uploaded
  if (!resume) {
    return res.status(400).send('Resume file is required.');
  }

  // Prepare the email options
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Job Application',
    text: `You have a new job application from ${fullName}. \n\nMessage: ${message}\n\nPhone: ${phone}`,
    attachments: [
      {
        filename: resume.originalname,
        path: resume.path,
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending application: ' + error.message);
    }
    res.send('Application submitted successfully!');
  });
});

module.exports = router;
