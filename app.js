document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d;
    var resumeForm = document.getElementById("resumeForm");
    var experienceContainer = document.getElementById("experienceContainer");
    var educationContainer = document.getElementById("educationContainer");
    var awardsContainer = document.getElementById("awardsContainer");
    var languagesContainer = document.getElementById("languagesContainer");
    // Event listener for form submission
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(resumeForm);
        var personalInfo = {
            fullName: formData.get("fullName"),
            jobTitle: formData.get("jobTitle"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            linkedin: formData.get("linkedin"),
            summary: formData.get("summary"),
            skills: formData.get("skills").split(',').map(function (skill) { return skill.trim(); })
        };
        console.log("Personal Information:", personalInfo);
    });
    // Helper function to create a new section dynamically
    function createSection(content, container) {
        var section = document.createElement("div");
        section.classList.add("entry");
        section.innerHTML = content;
        container.appendChild(section);
    }
    // Add experience section
    (_a = document.getElementById("addExperience")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var experienceContent = "\n            <input type=\"text\" placeholder=\"Job Title\">\n            <input type=\"text\" placeholder=\"Company\">\n            <input type=\"text\" placeholder=\"Years (e.g., 2020-2022)\">\n            <textarea placeholder=\"Describe responsibilities\"></textarea>\n        ";
        createSection(experienceContent, experienceContainer);
    });
    // Add education section
    (_b = document.getElementById("addEducation")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var educationContent = "\n            <input type=\"text\" placeholder=\"Institution\">\n            <input type=\"text\" placeholder=\"Degree\">\n            <input type=\"text\" placeholder=\"Years Attended\">\n        ";
        createSection(educationContent, educationContainer);
    });
    // Add awards section
    (_c = document.getElementById("addAward")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var awardContent = "\n            <input type=\"text\" placeholder=\"Award Title\">\n            <input type=\"text\" placeholder=\"Organization\">\n            <input type=\"text\" placeholder=\"Date\">\n        ";
        createSection(awardContent, awardsContainer);
    });
    // Add language section
    (_d = document.getElementById("addLanguage")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        var languageContent = "\n            <input type=\"text\" placeholder=\"Language\">\n            <input type=\"text\" placeholder=\"Proficiency (e.g., Fluent)\">\n        ";
        createSection(languageContent, languagesContainer);
    });
});
