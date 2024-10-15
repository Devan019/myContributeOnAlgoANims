export default function signupAuth(){
    document.getElementById('username').addEventListener('input', function() {
        const username = this.value;
        const usernameError = document.getElementById('usernameError');
        
        if (username.length > 0) {
            fetch('/check-username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    usernameError.style.display = 'inline';
                    document.getElementById('signupBtn').disabled = true;
                } else {
                    usernameError.style.display = 'none';
                    checkIfEnableSubmitButton();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            usernameError.style.display = 'none';
            checkIfEnableSubmitButton();
        }
    });
    
    document.getElementById('email').addEventListener('input', function() {
        const email = this.value;
        const emailError = document.getElementById('emailError');
        
        if (email.length > 0) {
            fetch('/check-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    emailError.style.display = 'inline';
                    document.getElementById('signupBtn').disabled = true;
                } else {
                    emailError.style.display = 'none';
                    checkIfEnableSubmitButton();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            emailError.style.display = 'none';
            checkIfEnableSubmitButton();
        }
    });
    
    document.getElementById('confirmPassword').addEventListener('input', function() {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        const passwordError = document.getElementById('passwordError');
    
        if (password !== confirmPassword) {
            passwordError.style.display = 'inline';
            document.getElementById('signupBtn').disabled = true;
        } else {
            passwordError.style.display = 'none';
            checkIfEnableSubmitButton();
        }
    });
    
    function checkIfEnableSubmitButton() {
        const usernameError = document.getElementById('usernameError').style.display;
        const emailError = document.getElementById('emailError').style.display;
        const passwordError = document.getElementById('passwordError').style.display;
    
        if (usernameError === 'none' && emailError === 'none' && passwordError === 'none') {
            document.getElementById('signupBtn').disabled = false;
        } else {
            document.getElementById('signupBtn').disabled = true;
        }
    }
    
    
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
    
    toggleConfirmPassword.addEventListener('click', function () {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
}