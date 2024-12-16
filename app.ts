document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const experienceContainer = document.getElementById("experienceContainer") as HTMLElement;
    const educationContainer = document.getElementById("educationContainer") as HTMLElement;
    const awardsContainer = document.getElementById("awardsContainer") as HTMLElement;
    const languagesContainer = document.getElementById("languagesContainer") as HTMLElement;

    // Event listener for form submission
    resumeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(resumeForm);
        const personalInfo = {
            fullName: formData.get("fullName") as string,
            jobTitle: formData.get("jobTitle") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            linkedin: formData.get("linkedin") as string,
            summary: formData.get("summary") as string,
            skills: (formData.get("skills") as string).split(',').map(skill => skill.trim())
        };
        console.log("Personal Information:", personalInfo);
    });

    // Helper function to create a new section dynamically
    function createSection(content: string, container: HTMLElement): void {
        const section = document.createElement("div");
        section.classList.add("entry");
        section.innerHTML = content;
        container.appendChild(section);
    }

    // Add experience section
    document.getElementById("addExperience")?.addEventListener("click", () => {
        const experienceContent = `
            <input type="text" placeholder="Job Title">
            <input type="text" placeholder="Company">
            <input type="text" placeholder="Years (e.g., 2020-2022)">
            <textarea placeholder="Describe responsibilities"></textarea>
        `;
        createSection(experienceContent, experienceContainer);
    });

    // Add education section
    document.getElementById("addEducation")?.addEventListener("click", () => {
        const educationContent = `
            <input type="text" placeholder="Institution">
            <input type="text" placeholder="Degree">
            <input type="text" placeholder="Years Attended">
        `;
        createSection(educationContent, educationContainer);
    });

    // Add awards section
    document.getElementById("addAward")?.addEventListener("click", () => {
        const awardContent = `
            <input type="text" placeholder="Award Title">
            <input type="text" placeholder="Organization">
            <input type="text" placeholder="Date">
        `;
        createSection(awardContent, awardsContainer);
    });

    // Add language section
    document.getElementById("addLanguage")?.addEventListener("click", () => {
        const languageContent = `
            <input type="text" placeholder="Language">
            <input type="text" placeholder="Proficiency (e.g., Fluent)">
        `;
        createSection(languageContent, languagesContainer);
    });
});
