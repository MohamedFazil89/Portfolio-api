const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "nmohamedfazil790@gmail.com",
        pass: "wcadntlytgozelsv"
    }
});

app.post("/api/send", (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
        from: "nmohamedfazil790@gmail.com",
        to: "nmohammedfazil790@gmail.com",
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    const mailOptions2 = {
        from: "nmohamedfazil790@gmail.com",
        to: email,
        subject: "Thanks for Contacting us!",
        text: "I'm glad that we connected feel free to contact me on whatsapp: +91 917646356 or LinkedIn"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).send("Email sent successfully");
    });

    
    transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).send("Email sent successfully");
    });
});


const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));