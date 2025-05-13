const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "sattudesai007@gmail.com",
    pass: "iueexpkgjvyjrnkp",
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"UrbanNest" <sattudesai007@gmail.com}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };



