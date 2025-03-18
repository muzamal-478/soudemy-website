// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // 🎯 Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust offset for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // 🎯 Sticky Navbar on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // 🎯 Mobile Menu Toggle
    const navToggle = document.createElement("div"); // Create a mobile menu button dynamically
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = "☰";  // Hamburger Icon
    document.querySelector(".nav-container").prepend(navToggle);

    navToggle.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });

    // 🎯 Close menu when a link is clicked (on mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector(".nav-links").classList.remove("active");
        });
    });

    // 🎯 Button Click Animation
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.add("clicked");
            setTimeout(() => {
                this.classList.remove("clicked");
            }, 300);
        });
    });

});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    menuToggle.classList.toggle("active");
});
