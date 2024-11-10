// script.js

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Modal for Media Gallery
const mediaItems = document.querySelectorAll('.media-gallery img');
mediaItems.forEach(item => {
    item.addEventListener('click', () => {
        // Open image modal
    });
});
