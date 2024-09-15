// script.js
const portfolioData = {
    experiences: [
        {
            title: "AI/ML Engineer",
            company: "South Guild Tech",
            date: "April 2024 - Present",
            description: "Enhancing machine learning frameworks and applying expertise in data annotation and large language models."
        },
        {
            title: "Machine Learning Intern",
            company: "TEKNOCRAT SERVICES LIMITED",
            date: "April 2024 - August 2024",
            description: "Contributed to pivotal projects leveraging machine learning and computer vision skills."
        }
    ],
    skills: [
        "LangChain", "RAG", "Vector Databases", "Machine Learning",
        "Computer Vision", "Flask", "Python", "TensorFlow", "PyTorch"
    ],
    projects: [
        {
            title: "FIRE RENDER MODEL",
            description: "Incredible innovation in fire safety engineering using advanced ML techniques.",
            image: "https://via.placeholder.com/300x200.png?text=Fire+Render+Model",
            demoLink: "https://demo.firerender.com",
            githubLink: "https://github.com/vineetkukreti/fire-render-model",
            tags: ["Machine Learning", "Fire Safety", "Python"]
        },
        {
            title: "Water Breeze Model",
            description: "An innovative water management solution leveraging IoT and ML for efficient resource utilization.",
            image: "https://via.placeholder.com/300x200.png?text=Water+Breeze+Model",
            demoLink: "https://demo.waterbreeze.com",
            githubLink: "https://github.com/vineetkukreti/water-breeze-model",
            tags: ["IoT", "Machine Learning", "Water Management"]
        },
        {
            title: "SUPERB",
            description: "A vision tool for blind & low-vision people using state-of-the-art computer vision algorithms.",
            image: "https://via.placeholder.com/300x200.png?text=SUPERB",
            demoLink: "https://demo.superb-vision.com",
            githubLink: "https://github.com/vineetkukreti/superb-vision-tool",
            tags: ["Computer Vision", "Accessibility", "AI"]
        }
    ]
};

function populateExperiences() {
    const experienceGrid = document.querySelector('.experience-grid');
    portfolioData.experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');
        expItem.innerHTML = `
            <h3>${exp.title}</h3>
            <p>${exp.company} | ${exp.date}</p>
            <p>${exp.description}</p>
        `;
        experienceGrid.appendChild(expItem);
    });
}

function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('span');
        skillItem.classList.add('skill-item');
        skillItem.textContent = skill;
        skillsGrid.appendChild(skillItem);
    });
}

function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    portfolioData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateExperiences();
    populateSkills();
    populateProjects();
});