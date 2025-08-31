
//Menu Toggle

function toggleMenu(event, menuId, headerId) {
    event.preventDefault();
    
    const menu = document.getElementById(menuId);
    const header = document.getElementById(headerId);

    if (!menu || !header) {
        console.error("Menu or header element not found");
        return;
    }

    if (menu.classList.contains('-translate-y-full')) {
        // Open menu
        menu.classList.remove('-translate-y-full');
        menu.classList.add('translate-y-0');
        // Hide header
        header.classList.add('translate-y-full');
    } else {
        // Close menu
        menu.classList.remove('translate-y-0');
        menu.classList.add('-translate-y-full');
        // Show header
        header.classList.remove('translate-y-full');
    }
}






document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path
    const currentPath = window.location.pathname;
  
    // Clear any existing active class first
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
  
    // Add the active class to the matching button
    if (currentPath.includes('about')) {
        document.getElementById('about-link').classList.add('active');
    } else if (currentPath.includes('services')) {
        document.getElementById('services-link').classList.add('active');
    } else if (currentPath.includes('project')) { // Matching with works page
        document.getElementById('works-link').classList.add('active');
    } else if (currentPath.includes('blog')) {
        document.getElementById('blog-link').classList.add('active');
    } else if (currentPath.includes('contact')) {
        document.getElementById('contact-link').classList.add('active');
    }
  });
  