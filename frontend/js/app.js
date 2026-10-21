
const navigationButtons = document.querySelectorAll("[data-section]");
const contentSections = document.querySelectorAll(".content-section");

function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
        return;
    }

    contentSections.forEach((section) => {
        section.hidden = section.id !== sectionId;
    });

    navigationButtons.forEach((button) => {
        const isActive = button.dataset.section === sectionId;

        if (button.classList.contains("nav-button")) {
            button.classList.toggle("active", isActive);
        }
    });
}

navigationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showSection(button.dataset.section);
    });
});
