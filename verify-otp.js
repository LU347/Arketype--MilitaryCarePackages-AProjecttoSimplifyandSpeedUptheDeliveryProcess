const email = document.querySelector('input[name="email"]').value;
const otp = document.querySelector('input[name="otp"]').value;

// Verify the OTP
fetch('/verify-otp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    otp,
  }),
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    window.location.href = 'index.html';
  } else {
    // OTP verification failed
    alert('The OTP you entered is invalid. Please try again.');
  }
});
