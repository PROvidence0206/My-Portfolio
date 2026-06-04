// ========================================
// TYPING EFFECT
// ========================================

const roles = [
    "Technical Support",
    "IT Infrastructure Support",
    "Hardware & Software Support",
    "Security Support",
  
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {

    const currentRole = roles[roleIndex];

    // TYPING
    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        // WORD FINISHED
        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }

    // DELETING
    else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        // WORD REMOVED
        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    // SPEED
    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

// START EFFECT
typeEffect();


// ========================================
// RANDOM FLOATING BADGES
// ========================================

const badges = document.querySelectorAll(".orbit-badge");

badges.forEach((badge) => {

    moveBadge(badge);

    setInterval(() => {
        moveBadge(badge);
    }, 4000);

});

function moveBadge(badge) {

    const x = Math.random() * 80 - 40;
    const y = Math.random() * 80 - 40;

    badge.style.transform =
        `translate(${x}px, ${y}px)`;

}


// ========================================
// REVEAL ON SCROLL
// ========================================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections() {

    const triggerBottom =
        window.innerHeight * 0.85;

    reveals.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {

            section.classList.add("active");

        }
    });
}


// ========================================
// SMOOTH ACTIVE NAVIGATION
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ========================================
// OPTIONAL PARALLAX EFFECT
// ========================================




// ========================================
// CONSOLE MESSAGE
// ========================================

console.log("Portfolio Loaded Successfully");