function SendEmail(email, OTP) {
  const API_KEY = '96efc37ca1c9c45620b4c763b152608d-77316142-178e09b0';
  const DOMAIN = 'sandbox416e5f8a024a4e6397078943867412d4.mailgun.org';

  const MAILGUN_API_URL = `https://api.mailgun.net/v3/${DOMAIN}/messages`;

  const formData = {
    from: 'Excited User <mailgun@sandbox416e5f8a024a4e6397078943867412d4.mailgun.org>',
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
