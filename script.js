document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formContainer = form.parentElement;
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.style.position = "fixed";
        successMessage.style.top = "50%";
        successMessage.style.left = "50%";
        successMessage.style.transform = "translate(-50%, -50%)";
        successMessage.style.padding = "1rem 2rem";
        successMessage.style.backgroundColor = "#4caf50";
        successMessage.style.color = "white";
        successMessage.style.borderRadius = "8px";
        successMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        successMessage.style.fontSize = "1.2rem";
        successMessage.style.textAlign = "center";
        successMessage.style.opacity = "0";
        successMessage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

        if (name && email && message) {
            successMessage.innerHTML = `<strong>Thank you, ${name}!</strong><br>Your message has been sent.`;

            // Append success message and trigger animation
            formContainer.appendChild(successMessage);
            successMessage.style.opacity = "1";
            successMessage.style.transform = "translate(-50%, -50%) scale(1)"; // Add a scaling effect on appearance

            setTimeout(() => {
                successMessage.style.opacity = "0";
                successMessage.style.transform = "translate(-50%, -50%) scale(0.8)"; // Shrink and fade out

                setTimeout(() => {
                    successMessage.remove();
                }, 500);
            }, 2000);

            form.reset();
        } else {
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.style.position = "fixed";
            errorMessage.style.top = "50%";
            errorMessage.style.left = "50%";
            errorMessage.style.transform = "translate(-50%, -50%)";
            errorMessage.style.padding = "1rem 2rem";
            errorMessage.style.backgroundColor = "#f44336";
            errorMessage.style.color = "white";
            errorMessage.style.borderRadius = "8px";
            errorMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            errorMessage.style.fontSize = "1.2rem";
            errorMessage.style.textAlign = "center";
            errorMessage.style.opacity = "0";
            errorMessage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

            errorMessage.textContent = "Please fill out all fields before submitting.";

            // Append error message and trigger animation
            formContainer.appendChild(errorMessage);
            errorMessage.style.opacity = "1";
            errorMessage.style.transform = "translate(-50%, -50%) scale(1)"; // Bounce-in effect

            // Add bounce animation
            setTimeout(() => {
                errorMessage.style.transform = "translate(-50%, -50%) scale(1.1)";
            }, 100);
            setTimeout(() => {
                errorMessage.style.transform = "translate(-50%, -50%) scale(1)"; // Return to original size
            }, 200);

            setTimeout(() => {
                errorMessage.style.opacity = "0";
                errorMessage.style.transform = "translate(-50%, -50%) scale(0.8)"; // Shrink and fade out

                setTimeout(() => {
                    errorMessage.remove();
                }, 500);
            }, 2500);
        }
    });
});
