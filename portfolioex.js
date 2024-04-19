document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const topOffset = 70; // adjust based on your header height

            window.scrollTo({
                top: targetSection.offsetTop - topOffset,
                behavior: 'smooth'
            });

            // Close menu on mobile
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });
});