const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.post('/send-email', (req, res) => {
    const formData = req.body;

    // Replace these values with your actual email configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    const mailOptions = {
        from: '',
        to: '',
        subject: 'New Contact Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.comment}\nPhone Number: ${formData.phoneNum}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('500 Internal Server Error');
        } else {
            res.status(200).send('Email sent successfully');
        }
    });
});





app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
