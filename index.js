require("dotenv").config();
const nodemailer = require("nodemailer");

const fs = require("fs");

async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const recipients = JSON.parse(fs.readFileSync("recipients.json", "utf8"));
  const messageTemplate = fs.readFileSync("message.html", "utf8");

  for (const recipient of recipients) {
    const message = messageTemplate.replace("{name}", recipient.name);

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient.email,
      subject: "Elevate your digital presence, start with your website.",
      html: message,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log(`Message sent to ${recipient.email}: %s`, info.messageId);
    } catch (error) {
      console.error(`Error sending to ${recipient.email}:`, error);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

main().catch(console.error);
