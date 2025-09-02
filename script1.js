function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        let title = section.querySelector(".title").innerText.toLowerCase();
        if (title.includes(input)) {
            section.style.display = "block"; // Show matching section
        } else {
            section.style.display = "none"; // Hide non-matching sections
        }
    });
}
