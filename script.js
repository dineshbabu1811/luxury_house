        // JavaScript for form validation
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.form');
            const emailInput = form.querySelector('input[type="email"]');
            const passwordInput = form.querySelector('input[type="password"]');
            const loginButton = form.querySelector('.btnn');

            // Function to validate email format
            function validateEmail(email) {
                const re = /\S+@\S+\.\S+/;
                return re.test(email);
            }

            // Function to validate password length
            function validatePassword(password) {
                return password.length >= 6;
            }

            // Function to handle form submission
            function handleSubmit(event) {
                event.preventDefault(); // Prevent form submission

                // Validate email and password
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();

                if (!validateEmail(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                if (!validatePassword(password)) {
                    alert('Password must be at least 6 characters long.');
                    return;
                }

                // If validation passes, you can submit the form or perform other actions
                alert('Form submitted successfully!');
                // Here you can submit the form using AJAX or other methods
            }

            // Attach event listener to the login button
            loginButton.addEventListener('click', handleSubmit);
        });