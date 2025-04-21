// Example: Smooth scroll (Optional)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = this.href;
    });
});
