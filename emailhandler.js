function SendEmail(email, OTP) {
    const API_KEY = '801d7773382f50a499ce5809df55bc0e-77316142-c8ea8b35';
    const DOMAIN = 'sandbox7284bc7a37514f5886d1e35462cfe1ba.mailgun.org';

  const MAILGUN_API_URL = `https://api.mailgun.net/v3/${DOMAIN}/messages`;

  const formData = {
      from: 'Excited User <mailgun@sandbox7284bc7a37514f5886d1e35462cfe1ba.mailgun.org>',
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
