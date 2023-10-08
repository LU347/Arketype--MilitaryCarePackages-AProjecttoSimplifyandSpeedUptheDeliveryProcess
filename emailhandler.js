function SendEmail(email, OTP) {
  const API_KEY = '021f92cdeae33ffdf0801bb1ff1f55d7-77316142-868c0691';
  const DOMAIN = 'sandbox2db555245e844769aaa12ee8cfd8793b.mailgun.org';

  const MAILGUN_API_URL = `https://api.mailgun.net/v3/${DOMAIN}/messages`;

  const formData = {
    from: 'Excited User <mailgun@sandbox2db555245e844769aaa12ee8cfd8793b.mailgun.org>',
    to: [email],
    subject: 'Hello',
    text: "Hello here's the magic link: http://localhost:3000/home/"+ OTP,
  };

  const auth = 'Basic ' + Buffer.from(`api:${API_KEY}`).toString('base64');

  fetch(MAILGUN_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': auth,
    },
    body: new URLSearchParams(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Email sent successfully:', data);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}

function generateOTP(length) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Including letters
  let otp = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    otp += chars[randomIndex];
  }

  return otp;
}

function generate7CharacterOTP() {
  return generateOTP(7);
}

const otp = generate7CharacterOTP();
console.log('Generated OTP:', otp);

module.exports = {
  SendEmail,
  generate7CharacterOTP,
};
