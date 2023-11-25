document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var errorMessage = document.getElementById('error-message');
    
    if (username === 'dustbin' && password === 'niit') {
        window.location.href = 'second.html';
    } else {
        errorMessage.textContent = 'Try again';
    }
}); 
