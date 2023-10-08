const email = document.querySelector('input[name="email"]').value;
const otp = Math.floor(Math.random() * 100000) + 1;

// Send the email with the OTP
const emailBody = `Your OTP is: ${otp}`;
const emailSubject = 'OTP for login';

fetch('/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: email,
    subject: emailSubject,
    body: emailBody,
  }),
});
