document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var emailRegex = /\S+@\S+\.\S+/;
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  if (!passwordRegex.test(password)) {
      alert('Password must contain an uppercase letter, a number, and be at least 8 characters long.');
      return;
  }

  if (password === 'ZenTradesTest@123') {
      // Redirect to the dashboard page
      window.location.href = 'dashboard.html';
  } else {
      alert('Incorrect password. Please try again.');
  }
});

function resetPassword() {
  window.location.href = `mailto:support@zentrades.pro?subject=Password Reset Request`;
}
