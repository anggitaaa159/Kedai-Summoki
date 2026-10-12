document.addEventListener("DOMContentLoaded", function () {
    if (window.feather) {
        feather.replace();
    }

    const menuButton = document.getElementById("hamburger-menu");
    const nav = document.getElementById("navbar-nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("active");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.innerHTML = isOpen
                ? '<i data-feather="x"></i>'
                : '<i data-feather="menu"></i>';
            if (window.feather) feather.replace();
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.innerHTML = '<i data-feather="menu"></i>';
                if (window.feather) feather.replace();
            });
        });
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});
