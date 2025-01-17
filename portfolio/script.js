// Initialize EmailJS with your User ID (replace with your actual User ID)
emailjs.init("2pWqpeHelCSCVclwm");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    email
        .send("service_23rbop2", "template_dnxq08r", {
            name: name,
            email: email,
            message: message,
        })
        .then(
            function (response) {
                document.getElementById("form-message").textContent = "Message sent successfully!";
                document.getElementById("form-message").style.color = "green";
                document.getElementById("contact-form").reset(); // Clear the form
            },
            function (error) {
                document.getElementById("form-message").textContent = "Failed to send message. Please try again.";
                document.getElementById("form-message").style.color = "red";
            }
        );
});



// Remove splash screen after animation
window.addEventListener('load', () => {
    const splash = document.querySelector('.splash-screen');
    setTimeout(() => {
        splash.style.display = 'none';
    }, 3000);
});

// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
    });
});

// Get the elements
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");
const projectGrid = document.getElementById("project-grid");

// Scroll to the left
scrollLeftButton.addEventListener("click", function() {
    projectGrid.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth"
    });
});

// Scroll to the right
scrollRightButton.addEventListener("click", function() {
    projectGrid.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth"
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav").getElementsByClassName("nav-links")[0];

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

