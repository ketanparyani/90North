// Function to adjust page size based on screen width
function adjustPageSize() {
    const screenWidth = window.innerWidth;
    const body = document.body;

    // Reset any scaling that might have been applied previously
    body.style.transform = "scale(1)";
    body.style.transformOrigin = "top left";

    if (screenWidth >= 992 && screenWidth <= 1600) {
        body.style.transform = "scale(0.9)";
        body.style.transformOrigin = "top left";
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        body.style.transform = "scale(0.8)";
        body.style.transformOrigin = "top left";
    } else if (screenWidth >= 600 && screenWidth <= 700) {
        body.style.transform = "scale(0.75)";
        body.style.transformOrigin = "top left";
    } else if (screenWidth <= 600) {
        body.style.transform = "scale(0.5)";
        body.style.transformOrigin = "top left";
    }
}

// Event listeners
window.addEventListener('resize', adjustPageSize);
window.addEventListener('load', adjustPageSize);
