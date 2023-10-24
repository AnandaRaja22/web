const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
   const { email, name, branch, studentName } = req.body;

   // Send email using nodemailer
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'yourgmail@gmail.com',
         pass: 'yourgmailpassword',
      },
   });

   const mailOptions = {
      from: 'yourgmail@gmail.com',
      to: 'anan20102.ee@rkec.ac.in',
      subject: 'New Registration',
      text: `New registration:\nEmail: ${email}\nName: ${name}\nBranch: ${branch}\nStudent Name: ${studentName}`,
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.error('Error:', error);
         res.status(500).json({ error: 'Internal Server Error' });
      } else {
         console.log('Email sent:', info.response);
         res.json({ success: true });
      }
   });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
