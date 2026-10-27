
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


const themeButtons = document.querySelectorAll("[data-theme-option]");
const availableThemes = ["tng", "picard", "klingon"];

function setTheme(theme) {
    if (!availableThemes.includes(theme)) {
        theme = "tng";
    }

    // Alte Theme-Klassen entfernen
    document.body.classList.remove("picard-theme", "klingon-theme");

    // Gewünschtes Theme aktivieren
    if (theme === "picard") {
        document.body.classList.add("picard-theme");
    } else if (theme === "klingon") {
        document.body.classList.add("klingon-theme");
    }

    // Auswahl speichern
    localStorage.setItem("lcars-theme", theme);

    // Aktive Auswahl visuell markieren
    themeButtons.forEach((button) => {
        const isActive = button.dataset.themeOption === theme;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

// Gespeichertes Theme beim Laden wiederherstellen
const savedTheme = localStorage.getItem("lcars-theme") || "tng";
setTheme(savedTheme);

// Klicks auf die Theme-Auswahl behandeln
themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setTheme(button.dataset.themeOption);
    });
});


