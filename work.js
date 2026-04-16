document.addEventListener("DOMContentLoaded", () => {

    /* SCROLL SPY */
    const sections = document.querySelectorAll('.project-block');
    const navLinks = document.querySelectorAll('.sidebar-item');

    if (sections.length > 0 && navLinks.length > 0) {

        function updateSidebarHighlight() {
            let current = "";

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
                    current = section.id;
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        }

        document.addEventListener("scroll", updateSidebarHighlight);
        updateSidebarHighlight();
    }


    /* CUSTOM CURSOR — DESKTOP ONLY */
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

        const cursor3 = document.querySelector(".cursor3");

        if (cursor3) {

            document.addEventListener("mousemove", (e) => {
                const target = e.target;

                // detect zones
                const isNav = target.closest(".header");
                const isFooter = target.closest(".contact");
                const isSidebar = target.closest(".sticky-sidebar");

                // DEFAULT → custom cursor ON
                let showCustom = true;
                let showSystem = false;

                // NAV + FOOTER → system cursor ONLY
                if (isNav || isFooter) {
                    showCustom = false;
                    showSystem = true;
                }

                // SIDEBAR → no cursor at all
                if (isSidebar) {
                    showCustom = false;
                    showSystem = false;
                }

                // apply states
                cursor3.style.opacity = showCustom ? "1" : "0";
                document.body.style.cursor = showSystem ? "auto" : "none";

                // move cursor
                cursor3.style.transform =
                    `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            });

            // hide when leaving page
            document.addEventListener("mouseleave", () => {
                cursor3.style.opacity = 0;
            });
        }
    }

const previewBox = document.querySelector('.sidebar-peek-preview');
const previewImg = document.getElementById('peekPreviewImg');

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const src = item.getAttribute('data-preview');
        previewImg.src = src;

        // Get the vertical position of the hovered item
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;

        // Move preview to align with the text
        previewBox.style.top = `${itemCenter}px`;

        // Reveal + slide out
        previewBox.style.opacity = 1;
        previewBox.style.transform = "translate(0, -50%)";
    });

    item.addEventListener('mouseleave', () => {
        previewBox.style.opacity = 0;
        previewBox.style.transform = "translate(-100%, -50%)";
    });
});


});