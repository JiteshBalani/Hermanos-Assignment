window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");


        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.querySelector('.accordion-status b').textContent = '+';
        } else {
            panel.style.display = "block";
            this.querySelector('.accordion-status b').textContent = '-';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-1 a');

    function highlightNavLink() {
        let currentSection = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop + 700;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section;
            }
        });

        navLinks.forEach((link) => {
            link.style.borderBottomColor = 'transparent';
        });

        if (currentSection) {
            const correspondingLink = document.querySelector(`nav a[href="#${currentSection.id}"]`);
            correspondingLink.style.borderBottomColor = '#41b6fc';
        }
    }

    window.addEventListener('scroll', highlightNavLink);
    window.addEventListener('resize', highlightNavLink);
});
