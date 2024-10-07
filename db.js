// IndexedDB setup for simple local storage of users and data
let db;

function initDatabase() {
  const request = indexedDB.open('ProHireDB', 1);

  request.onupgradeneeded = function(event) {
    db = event.target.result;
    const userStore = db.createObjectStore('users', { keyPath: 'username' });
    
    // Add default users
    userStore.transaction.oncomplete = function() {
      const userObjectStore = db.transaction('users', 'readwrite').objectStore('users');
      userObjectStore.add({ username: 'admin', password: 'adminpass', role: 'admin' });
      userObjectStore.add({ username: 'employee', password: 'employeepass', role: 'employee' });
    };
  };

  request.onsuccess = function(event) {
    db = event.target.result;
  };

  request.onerror = function(event) {
    console.error('Database error:', event.target.errorCode);
  };
}

function validateUser(username, password) {
  const transaction = db.transaction(['users']);
  const objectStore = transaction.objectStore('users');
  const request = objectStore.get(username);

  request.onsuccess = function(event) {
    const user = event.target.result;
    if (user && user.password === password) {
      window.location.href = `dashboard.html?role=${user.role}`;
    } else {
      alert('Invalid login credentials!');
    }
  };

  request.onerror = function(event) {
    console.error('Error fetching user:', event.target.errorCode);
  };
}

// Initialize database on page load
window.onload = initDatabase;
