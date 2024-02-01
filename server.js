const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/submit-form', (req, res) => {
   console.log(req.body);
    
	
	const formData = req.body;





	
	    const transporter = nodemailer.createTransport({
	        service: 'Gmail',
		host: 'smtp.gmail.com',
	        port: 465,
	        secure: true,
	        auth: {
	            user: 'brady93hawkins@gmail.com',
	            pass:  'bwek blrg lesc dsxr'
	        }
	    });


		const mailOptions = {
			from: formData.name,
			to: 'brady93hawkins@gmail.com',
			subject: 'New Message from Contact Form - Submitted from '+ formData.name + ' ' + formData.phone,
			text: formData.comment + ' \nEMAIL:' + formData.email + ' \nPHONE:' + formData.phone + ' \nNAME:' + formData.name, 
		
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
