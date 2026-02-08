// Hide loader after page loads
window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        // Keep loader visible for 1 second
        setTimeout(function() {
            loader.classList.remove('active');
        }, 1000);
    }
});

// Show loader when clicking navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href$=".html"]');
    const loader = document.querySelector('.page-loader');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (loader && this.getAttribute('href') !== '#') {
                loader.classList.add('active');
            }
        });
    });
});