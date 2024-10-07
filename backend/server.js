const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up multer for file upload
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// API endpoint to handle form submission
app.post('/send-email', upload.single('resume'), (req, res) => {
  console.log('Received data:', req.body); // Log the incoming request body

  const { fullName, email, phone, message } = req.body;
  const resume = req.file; // Access the uploaded file

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Compose the email
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Mail fron website ${fullName}`,
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    attachments: [
      {
        filename: resume?.originalname || 'resume.pdf',
        content: resume?.buffer || 'No resume attached',
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.send({ message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
