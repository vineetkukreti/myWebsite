const portfolioData = {
    experiences: [
        {
            title: "AI/ML Engineer",
            company: "South Guild Tech",
            date: "April 2024 - Present",
            description: "Developing AI applications with RAG, managing graph data using Neo4j, and handling MongoDB databases. Performing text analysis and optimizing prompts for improved AI model performance."
        },
        {
            title: "Machine Learning Intern",
            company: "TEKNOCRAT SERVICES LIMITED",
            date: "April 2024 - August 2024",
            description: "Contributed to pivotal projects leveraging machine learning and computer vision skills."
        },
        {
            title: "Subject Matter Expert",
            company: "Chegg Inc.",
            date: "February 2023 - April 2024",
            description: "Provided expert knowledge and assistance in various subject areas."
        },
        {
            title: "Data Science Intern",
            company: "Insignia Consultancy Solutions",
            date: "July 2023 - October 2023",
            description: "Gained hands-on experience in data science techniques and methodologies."
        },
        {
            title: "Teaching Assistant",
            company: "Coding Ninjas",
            date: "February 2023 - March 2023",
            description: "Provided clear explanations and resolved programming doubts for 110+ students, receiving a high rating of 4.67/5."
        },
        {
            title: "Web Developer",
            company: "APhO 2022",
            date: "December 2021 - June 2022",
            description: "Created a fully functional website for the Asian Physics Olympiad 2022, commissioned by the Indian government. Implemented effective SEO strategies, achieving top Google rankings."
        },
        {
            title: "Web Developer",
            company: "NaturOganics",
            date: "December 2021 - April 2022",
            description: "Developed and optimized a Wix-based website for a startup focused on delivering fresh vegetables. Enhanced content and implemented SEO strategies for improved online visibility."
        }
    ],
    skills: [
        "Python", "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
        "MongoDB", "Neo4j", "Flask", "LangChain", "RAG", "Vector Databases", "Prompt Engineering",
        "TensorFlow", "PyTorch", "YOLO", "Streamlit", "Web Development", "SEO", "WordPress", "Wix"
    ],
    projects: [
        {
            title: "Smart Agriculture and Environmental Monitoring System",
            description: "Comprehensive system for precision farming including weed and insect detection, drone-based monitoring, fire detection, fish farming optimization, and soil analysis.",
            image: "https://via.placeholder.com/300x200.png?text=Smart+Agriculture",
            demoLink: "#",
            githubLink: "#",
            tags: ["Machine Learning", "Computer Vision", "IoT", "Flask", "MySQL"]
        },
        {
            title: "FoodLens: AI-Powered Calorie Advisor",
            description: "Hybrid AI system that calculates calorie intake from food images using YOLO and large language models.",
            image: "https://via.placeholder.com/300x200.png?text=FoodLens",
            demoLink: "#",
            githubLink: "https://github.com/vineetkukreti/Food_calories_advisor",
            tags: ["YOLO", "LLM", "Computer Vision", "Streamlit"]
        },
        {
            title: "Multipara Patient Monitor Data Detector",
            description: "Software solution to extract and interpret vital signs data from multipara monitors using video feeds.",
            image: "https://via.placeholder.com/300x200.png?text=Patient+Monitor+Detector",
            demoLink: "#",
            githubLink: "https://github.com/vineetkukreti/vineetkukreti-MultiPara-Monitor-Reading-Detector",
            tags: ["Computer Vision", "Deep Learning", "Python"]
        }
    ],
    patents: [
        {
            title: "FIRE RENDER MODEL: INCREDIBLE INNOVATION IN FIRE SAFETY ENGINEERING",
            number: "202211059773 A",
            date: "Issued Nov 18, 2022",
            description: "Real-time forest fire detection system using What Three Words technology for accurate location and swift response."
        },
        {
            title: "SUPERB: A VISION TOOL FOR BLIND & LOW-VISION PEOPLE",
            number: "202211059770 A",
            date: "Issued Oct 28, 2022",
            description: "Smart glasses with AI technology to provide real-time data and navigation assistance for visually impaired individuals."
        },
        {
            title: "Water Breeze Model",
            number: "202211004912 A",
            date: "Issued Feb 2, 2022",
            description: "Revolutionary system that harnesses condensation to provide a sustainable source of clean drinking water from sea or air."
        }
    ],
    volunteering: [
        {
            title: "Vice Chairperson",
            organization: "IEEE SB GEHU",
            date: "Jan 2021 - Dec 2022",
            description: "Led initiatives to advance technology and engineering, organized workshops, seminars, and promoted student-led research projects."
        },
        {
            title: "Technical Head",
            organization: "Shikhar CLUB",
            date: "Jan 2022 - Sep 2022",
            description: "Co-founded and led technical aspects of an entrepreneurship club, fostering innovation and problem-solving skills among students."
        }
    ]
};

function populateExperiences() {
    const experienceGrid = document.getElementById('experience-grid');
    portfolioData.experiences.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.classList.add('bg-white', 'rounded-lg', 'shadow-xl', 'p-6', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-2xl');
        expItem.setAttribute('data-aos', 'fade-up');
        expItem.setAttribute('data-aos-delay', (index * 100).toString());
        expItem.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2 text-primary">${exp.title}</h3>
            <p class="text-gray-600 mb-2">${exp.company} | ${exp.date}</p>
            <p class="text-gray-700">${exp.description}</p>
        `;
        experienceGrid.appendChild(expItem);
    });
}

function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    portfolioData.skills.forEach((skill, index) => {
        const skillItem = document.createElement('span');
        skillItem.classList.add('bg-gradient', 'text-white', 'px-4', 'py-2', 'rounded-full', 'text-sm', 'transition', 'transform', 'hover:scale-110');
        skillItem.setAttribute('data-aos', 'fade-up');
        skillItem.setAttribute('data-aos-delay', (index * 50).toString());
        skillItem.textContent = skill;
        skillsGrid.appendChild(skillItem);
    });
}

function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('bg-white', 'rounded-lg', 'shadow-xl', 'overflow-hidden', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-2xl');
        projectItem.setAttribute('data-aos', 'fade-up');
        projectItem.setAttribute('data-aos-delay', (index * 100).toString());
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 text-primary">${project.title}</h3>
                <p class="text-gray-700 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">${tag}</span>`).join('')}
                </div>
                <div class="flex justify-between">
                    <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Demo</a>
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">GitHub</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

function populatePatents() {
    const patentsGrid = document.getElementById('patents-grid');
    portfolioData.patents.forEach((patent, index) => {
        const patentItem = document.createElement('div');
        patentItem.classList.add('bg-white', 'rounded-lg', 'shadow-xl', 'p-6', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-2xl');
        patentItem.setAttribute('data-aos', 'fade-up');
        patentItem.setAttribute('data-aos-delay', (index * 100).toString());
        patentItem.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-primary">${patent.title}</h3>
            <p class="text-gray-600 mb-2">${patent.number} | ${patent.date}</p>
            <p class="text-gray-700">${patent.description}</p>
        `;
        patentsGrid.appendChild(patentItem);
    });
}

function populateVolunteering() {
    const volunteeringGrid = document.getElementById('volunteering-grid');
    portfolioData.volunteering.forEach((vol, index) => {
        const volItem = document.createElement('div');
        volItem.classList.add('bg-white', 'rounded-lg', 'shadow-xl', 'p-6', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-2xl');
        volItem.setAttribute('data-aos', 'fade-up');
        volItem.setAttribute('data-aos-delay', (index * 100).toString());
        volItem.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-primary">${vol.title}</h3>
            <p class="text-gray-600 mb-2">${vol.organization} | ${vol.date}</p>
            <p class="text-gray-700">${vol.description}</p>
        `;
        volunteeringGrid.appendChild(volItem);
    });
}

function initializeTypewriter() {
    const element = document.querySelector('.typewriter');
    const words = ['AI Engineer', 'ML Specialist', 'Computer Vision Expert', 'NLP Enthusiast'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = words[wordIndex];
        if (isDeleting) {
            element.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}

function animateAIIcons() {
    const icons = document.querySelectorAll('.ai-icon');
    icons.forEach(icon => {
        setInterval(() => {
            const randomX = Math.random() * 20 - 10; // Random value between -10 and 10
            const randomY = Math.random() * 20 - 10; // Random value between -10 and 10
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateExperiences();
    populateSkills();
    populateProjects();
    populatePatents();
    populateVolunteering();
    initializeTypewriter();
    animateAIIcons();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white', 'shadow-md');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });
});