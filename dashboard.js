// Dashboard role-based content
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    
    if (role === 'admin') {
      document.getElementById('adminSection').style.display = 'block';
      document.getElementById('roleGreeting').textContent = 'Logged in as Admin';
    } else if (role === 'employee') {
      document.getElementById('employeeSection').style.display = 'block';
      document.getElementById('roleGreeting').textContent = 'Logged in as Employee';
    } else {
      alert('Invalid role!');
      window.location.href = 'index.html';
    }
  });
  