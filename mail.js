function verifyPlace(address) {
  // Create a new VerifyPlace request.
  const request = {
    address,
  };

  // Make a request to the VerifyPlace service.
  fetch('/verify-place', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
  .then(response => response.json())
  .then(data => {
    // If the place is real, the `verified` property will be `true`.
    if (data.verified) {
      // The place is real!
      alert('The place is real!');
    } else {
      // The place is not real.
      alert('The place is not real.');
    }
  });
}
