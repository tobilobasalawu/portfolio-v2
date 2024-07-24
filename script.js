const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Function to handle scroll and update active link
const updateActiveLink = () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};

// Handle scroll event
window.addEventListener("scroll", updateActiveLink);

// Ensure the correct link is highlighted on page load
document.addEventListener("DOMContentLoaded", () => {
    let current = "about"; // Set the default section id to "about"
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active"); // Remove the active class from all links
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active"); // Add the active class to the current link
        }
    });
});

// Ensure smooth scrolling to sections
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);

        if (targetId === "about") {
            // Scroll to the top of the page if "about" link is clicked
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            // Scroll to the target section
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
