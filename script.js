document.addEventListener("DOMContentLoaded", () => {

    /* Check active user session on page load */
    fetch("check_session.php")
        .then(response => response.json())
        .then(data => {
            const navLogin = document.getElementById("navLogin");
            const welcomeMessage = document.getElementById("welcomeMessage");

            if (data.logged_in) {
                if (navLogin) {
                    navLogin.href = "logout.php";
                }
                if (welcomeMessage) {
                    welcomeMessage.textContent = `Welcome, ${data.username}`;
                    welcomeMessage.removeAttribute("hidden");
                }
            } else {
                if (navLogin) {
                    navLogin.href = "login.html";
                }
                if (welcomeMessage) {
                    welcomeMessage.setAttribute("hidden", true);
                }
            }
           
            /* Apply current language translations */
            cambiarIdioma(localStorage.getItem("idioma") || "en");
        })
        .catch(err => console.error("Error session check:", err));


   /* Handle URL feedback messages (errors or success) using translations */
    const feedback = document.getElementById("feedback");
    const params = new URLSearchParams(window.location.search);

    if (feedback) {
        const errorKey = params.get("error");
        const successKey = params.get("success");

        if (errorKey || successKey) {
            const currentLang = localStorage.getItem("idioma") || "en";
            
            fetch("idiomas.json")
                .then(response => response.json())
                .then(data => {
                    const translations = data[currentLang];
                    
                    if (errorKey && translations[errorKey]) {
                        feedback.textContent = translations[errorKey];
                        feedback.className = "error";
                    } else if (successKey && translations[successKey]) {
                        feedback.textContent = translations[successKey];
                        feedback.className = "success";
                    }
                })
                .catch(err => console.error("Error loading feedback translation:", err));
        }
    }

    /* Client-side register form validation */
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function(event) {

            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirm_password").value;


            /* Validate username length */
            if (username.length < 8 || username.length > 18) {
                event.preventDefault();
                feedback.textContent =
                    "Username must have between 8 and 18 characters.";
                feedback.className = "error";
                return;
            }


            /* Validate password length */
            if (password.length < 8 || password.length > 18) {
                event.preventDefault();
                feedback.textContent =
                    "Password must have between 8 and 18 characters.";
                feedback.className = "error";
                return;
            }


            /* Validate that username and password are not identical */
            if (username === password) {
                event.preventDefault();
                feedback.textContent =
                    "Username and password cannot be the same.";
                feedback.className = "error";
                return;
            }


            /* Validate that password contains at least one special character */
            const specialCharPattern = /[\W_]/;
            if (!specialCharPattern.test(password)) {
                event.preventDefault();
                feedback.textContent =
                    "Password must contain at least one special character.";
                feedback.className = "error";
                return;
            }


            /* Validate password confirmation match */
            if (password !== confirmPassword) {
                event.preventDefault();
                feedback.textContent =
                    "Passwords do not match.";
                feedback.className = "error";
                return;
            }

        });

    }

});