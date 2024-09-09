document.addEventListener('DOMContentLoaded', function () {

    const captchaPreview = document.getElementById('captcha-preview');
    const refreshButton = document.getElementById('captcha-refresh');

    const generateCaptcha = () => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&';
        let captcha = '';
        for (let i = 0; i < 10; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaPreview.textContent = captcha;
    };
    generateCaptcha();

    refreshButton.addEventListener('click', () => {
        generateCaptcha();
    });


    const signupForm = document.getElementById('signup-form');
    const captchaInput = document.getElementById('captcha-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    signupForm.addEventListener('submit', (e) => {
        const inputCaptcha = captchaInput.value.trim();
        const generatedCaptcha = captchaPreview.textContent.trim();


        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            // swal("Passwords do not match");
            e.preventDefault();
        }

    
        if (inputCaptcha === '') {
            alert('Please enter the captcha.');
            // swal("Please enter the captcha");
            e.preventDefault();
        } else if (inputCaptcha !== generatedCaptcha) {
            // swal('Captcha did not match! Try again.');
            alert('Captcha did not match! Try again.');
            e.preventDefault();
            generateCaptcha(); 
        } else {
            // swal('Captcha verified. Sign up successful!');
            alert('Captcha verified. Sign up successful!');
        }
    });
});

