
    // Display the current year
    document.getElementById("year").textContent =
        new Date().getFullYear();


    // Open and close the mobile navigation menu
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕" : "☰";
    });


    // Close the menu after clicking a navigation link
    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        });
    });


    // Prepare an email when the contact form is submitted
    document.getElementById("contactForm").addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const formMessage = document.getElementById("form-message");

            // Replace this with your actual email address
            const myEmail = "your-email@example.com";

            if (myEmail === "your-email@example.com") {
                formMessage.textContent =
                    "Please set your email address in the JavaScript first.";
                return;
            }

            const subject = encodeURIComponent(
                "Portfolio message from " + name
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            window.location.href =
                "mailto:" + myEmail +
                "?subject=" + subject +
                "&body=" + body;
        }
    );
