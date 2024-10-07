// Handle the login and role-based access
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate user with a function that checks against local database
    validateUser(username, password);
  });
  
  function validateUser(username, password) {
    // Placeholder for now, but should interact with a local database
    if (username === "admin" && password === "adminpass") {
      window.location.href = 'dashboard.html?role=admin';
    } else if (username === "employee" && password === "employeepass") {
      window.location.href = 'dashboard.html?role=employee';
    } else {
      alert('Invalid login credentials!');
    }
  }
  