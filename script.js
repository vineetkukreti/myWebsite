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
    skills: {
        "AI & Machine Learning": [
            { name: "Machine Learning", level: "Expert", icon: "fas fa-brain" },
            { name: "Deep Learning", level: "Expert", icon: "fas fa-network-wired" },
            { name: "Computer Vision", level: "Expert", icon: "fas fa-eye" },
            { name: "Natural Language Processing", level: "Advanced", icon: "fas fa-language" },
            { name: "TensorFlow", level: "Advanced", icon: "fab fa-google" },
            { name: "PyTorch", level: "Advanced", icon: "fas fa-fire" },
            { name: "YOLO", level: "Advanced", icon: "fas fa-search" }
        ],
        "Programming & Tools": [
            { name: "Python", level: "Expert", icon: "fab fa-python" },
            { name: "JavaScript", level: "Intermediate", icon: "fab fa-js" },
            { name: "Flask", level: "Advanced", icon: "fas fa-flask" },
            { name: "Streamlit", level: "Advanced", icon: "fas fa-chart-line" },
            { name: "Git", level: "Advanced", icon: "fab fa-git-alt" },
            { name: "Docker", level: "Intermediate", icon: "fab fa-docker" }
        ],
        "Databases & Cloud": [
            { name: "MongoDB", level: "Advanced", icon: "fas fa-leaf" },
            { name: "Neo4j", level: "Advanced", icon: "fas fa-project-diagram" },
            { name: "MySQL", level: "Intermediate", icon: "fas fa-database" },
            { name: "Vector Databases", level: "Advanced", icon: "fas fa-vector-square" },
            { name: "AWS", level: "Intermediate", icon: "fab fa-aws" }
        ],
        "AI Frameworks": [
            { name: "LangChain", level: "Advanced", icon: "fas fa-link" },
            { name: "RAG", level: "Expert", icon: "fas fa-robot" },
            { name: "Prompt Engineering", level: "Expert", icon: "fas fa-pen-nib" },
            { name: "Hugging Face", level: "Advanced", icon: "fas fa-smile" }
        ]
    },
    projects: [
        {
            title: "Smart Agriculture and Environmental Monitoring System",
            description: "Comprehensive system for precision farming including weed and insect detection, drone-based monitoring, fire detection, fish farming optimization, and soil analysis.",
            image: "images/project1.jpg",
            demoLink: "#",
            githubLink: "#",
            tags: ["Machine Learning", "Computer Vision", "IoT", "Flask", "MySQL"]
        },
        {
            title: "FoodLens: AI-Powered Calorie Advisor",
            description: "Hybrid AI system that calculates calorie intake from food images using YOLO and large language models.",
            image: "images/project2.jpg",
            demoLink: "#",
            githubLink: "https://github.com/vineetkukreti/Food_calories_advisor",
            tags: ["YOLO", "LLM", "Computer Vision", "Streamlit"]
        },
        {
            title: "Multipara Patient Monitor Data Detector",
            description: "Software solution to extract and interpret vital signs data from multipara monitors using video feeds.",
            image: "images/project3.jpg",
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
            description: "Real-time forest fire detection system using What Three Words technology for accurate location and swift response.",
            image: "images/patent1.jpg"
        },
        {
            title: "SUPERB: A VISION TOOL FOR BLIND & LOW-VISION PEOPLE",
            number: "202211059770 A",
            date: "Issued Oct 28, 2022",
            description: "Smart glasses with AI technology to provide real-time data and navigation assistance for visually impaired individuals.",
            image: "images/patent2.jpg"
        },
        {
            title: "Water Breeze Model",
            number: "202211004912 A",
            date: "Issued Feb 2, 2022",
            description: "Revolutionary system that harnesses condensation to provide a sustainable source of clean drinking water from sea or air.",
            image: "images/patent3.jpg"
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
    if (!experienceGrid) return;
    
    experienceGrid.innerHTML = '';
    portfolioData.experiences.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.classList.add('bg-white', 'rounded-lg', 'shadow-xl', 'p-6', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-2xl', 'border', 'border-gray-100');
        expItem.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        expItem.setAttribute('data-aos-delay', (100 + index * 50).toString());
        
        expItem.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="bg-primary bg-opacity-10 p-3 rounded-full mr-4 hidden sm:block">
                    <i class="fas fa-briefcase text-primary"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-1 text-primary">${exp.title}</h3>
                    <p class="text-gray-600 text-sm flex items-center flex-wrap">
                        <span class="font-medium">${exp.company}</span>
                        <span class="mx-2 text-gray-400">•</span>
                        <span class="text-gray-500">${exp.date}</span>
                    </p>
                </div>
            </div>
            <p class="text-gray-700">${exp.description}</p>
        `;
        
        experienceGrid.appendChild(expItem);
    });
}

function populateSkills() {
    const skillsContainer = document.getElementById('skills-categories');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    const categoryColors = {
        "AI & Machine Learning": "bg-purple-50 border-purple-200 text-purple-800",
        "Programming & Tools": "bg-blue-50 border-blue-200 text-blue-800", 
        "Databases & Cloud": "bg-green-50 border-green-200 text-green-800",
        "AI Frameworks": "bg-orange-50 border-orange-200 text-orange-800"
    };
    
    Object.entries(portfolioData.skills).forEach(([category, skills], categoryIndex) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('mb-12');
        categoryDiv.setAttribute('data-aos', 'fade-up');
        categoryDiv.setAttribute('data-aos-delay', (categoryIndex * 100).toString());
        
        const categoryColor = categoryColors[category] || "bg-gray-50 border-gray-200 text-gray-800";
        
        categoryDiv.innerHTML = `
            <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">${category}</h3>
                <div class="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                ${skills.map((skill, index) => `
                    <div class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                         data-aos="zoom-in" data-aos-delay="${(categoryIndex * 100) + (index * 50)}">
                        <div class="text-center">
                            <div class="w-12 h-12 ${categoryColor.split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <i class="${skill.icon} text-xl ${categoryColor.split(' ')[2]}"></i>
                            </div>
                            <h4 class="font-semibold text-gray-900 mb-2">${skill.name}</h4>
                            <div class="flex items-center justify-center">
                                <span class="px-2 py-1 ${categoryColor} text-xs font-medium rounded-full">
                                    ${skill.level}
                                </span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(categoryDiv);
    });
}

function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    portfolioData.projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('group', 'bg-white', 'rounded-2xl', 'overflow-hidden', 'shadow-lg', 'hover:shadow-xl', 'transition-all', 'duration-300', 'transform', 'hover:-translate-y-2', 'border', 'border-gray-100');
        projectItem.setAttribute('data-aos', 'fade-up');
        projectItem.setAttribute('data-aos-delay', (100 * index).toString());
        
        const isActive = project.githubLink !== '#' || project.demoLink !== '#';
        
        projectItem.innerHTML = `
            <div class="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <img src="${project.image}" alt="${project.title}" 
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"300\" viewBox=\"0 0 400 300\"%3E%3Crect width=\"400\" height=\"300\" fill=\"%23f3f4f6\"/%3E%3Ctext x=\"50%25\" y=\"50%25\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"18\" fill=\"%236b7280\"%3E${project.title}%3C/text%3E%3C/svg%3E'">
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-4 left-4 right-4 flex gap-2">
                        ${project.demoLink !== '#' ? `
                            <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" 
                               class="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white/30 transition-colors">
                                <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                            </a>
                        ` : ''}
                        ${project.githubLink !== '#' ? `
                            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" 
                               class="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white/30 transition-colors">
                                <i class="fab fa-github mr-2"></i>Code
                            </a>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Status Badge -->
                <div class="absolute top-4 right-4">
                    <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full ${isActive ? 'text-green-600' : 'text-orange-600'}">
                        ${isActive ? 'Active' : 'In Development'}
                    </span>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    ${project.title}
                </h3>
                
                <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.slice(0, 3).map(tag => `
                        <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                            ${tag}
                        </span>
                    `).join('')}
                    ${project.tags.length > 3 ? `
                        <span class="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-md">
                            +${project.tags.length - 3} more
                        </span>
                    ` : ''}
                </div>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="text-sm text-gray-500">
                        <i class="fas fa-code mr-1"></i> AI/ML Project
                    </div>
                    <div class="flex gap-2">
                        ${project.githubLink !== '#' ? `
                            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" 
                               class="text-gray-400 hover:text-gray-600 transition-colors">
                                <i class="fab fa-github text-lg"></i>
                            </a>
                        ` : ''}
                        ${project.demoLink !== '#' ? `
                            <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" 
                               class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fas fa-external-link-alt text-lg"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectItem);
    });
}

function populatePatents() {
    const patentsGrid = document.getElementById('patents-grid');
    if (!patentsGrid) return;
    
    patentsGrid.innerHTML = '';
    portfolioData.patents.forEach((patent, index) => {
        const patentItem = document.createElement('div');
        patentItem.classList.add('bg-white', 'rounded-lg', 'shadow-xl', 'overflow-hidden', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-2xl', 'border', 'border-gray-100');
        patentItem.setAttribute('data-aos', index % 2 === 0 ? 'fade-up-right' : 'fade-up-left');
        patentItem.setAttribute('data-aos-delay', (100 * index).toString());
        patentItem.innerHTML = `
            <div class="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
                <img src="${patent.image}" alt="${patent.title}" class="w-full h-full object-cover opacity-80">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div class="p-4 text-white">
                        <span class="inline-block px-3 py-1 bg-primary bg-opacity-80 rounded-full text-xs font-semibold mb-2">${patent.date}</span>
                        <h3 class="text-xl font-bold">${patent.number}</h3>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-primary mb-2">${patent.title}</h3>
                <p class="text-gray-700">${patent.description}</p>
            </div>
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
            <div class="flex items-center mb-4">
                <div class="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <i class="fas fa-hands-helping text-primary"></i>
                </div>
                <div>
                    <h3 class="text-xl font-semibold">${vol.title}</h3>
                    <p class="text-sm text-gray-600">${vol.organization} | ${vol.date}</p>
                </div>
            </div>
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
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 1000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typeSpeed);
    }

    type();
}

function animateAIIcons() {
    const icons = document.querySelectorAll('.ai-icon');
    icons.forEach(icon => {
        // Animation handled by CSS now
    });
}

function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Initialize EmailJS (you'll need to replace these with your actual values)
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const submitText = submitBtn.querySelector('.submit-text');
        const loadingText = submitBtn.querySelector('.loading-text');
        const formStatus = document.getElementById('form-status');
        const successMessage = formStatus.querySelector('.success-message');
        const errorMessage = formStatus.querySelector('.error-message');
        
        // Get form values
        const formData = {
            user_name: document.getElementById('name').value,
            user_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_email: 'vineetkukreti34@gmail.com'
        };
        
        // Validate form
        if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        loadingText.classList.remove('hidden');
        submitBtn.classList.add('opacity-75');
        
        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                formData
            );
            
            if (response.status === 200) {
                showFormMessage('success');
                contactForm.reset();
                
                // Track successful form submission with analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'Contact',
                        event_label: 'Success'
                    });
                }
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Error sending email:', error);
            showFormMessage('error');
            
            // Track failed form submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'Error'
                });
            }
            
        } finally {
            // Reset button state
            setTimeout(() => {
                submitBtn.disabled = false;
                submitText.classList.remove('hidden');
                loadingText.classList.add('hidden');
                submitBtn.classList.remove('opacity-75');
            }, 1000);
        }
    });
    
    function showFormMessage(type) {
        const formStatus = document.getElementById('form-status');
        const successMessage = formStatus.querySelector('.success-message');
        const errorMessage = formStatus.querySelector('.error-message');
        
        // Hide both messages first
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        formStatus.classList.remove('hidden');
        
        // Show appropriate message
        if (type === 'success') {
            successMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.remove('hidden');
        }
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    }
}

// Enhanced typewriter effect
function initializeTypewriter() {
    const element = document.querySelector('.typewriter');
    if (!element) return;
    
    const words = [
        'AI/ML Engineer',
        'Computer Vision Expert', 
        'NLP Specialist',
        'Machine Learning Engineer',
        'Deep Learning Researcher',
        'AI Solution Architect'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            element.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75;
        } else {
            element.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typeSpeed);
    }

    // Start the typewriter effect
    type();
}

// Enhanced scroll effects with performance optimization
function handleScrollEffects() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    let ticking = false;
    
    function updateOnScroll() {
        const scrollY = window.scrollY;
        
        // Navbar effect
        if (scrollY > 100) {
            navbar.classList.add('backdrop-blur-xl', 'bg-white/95', 'shadow-lg');
            navbar.classList.remove('bg-white/90');
        } else {
            navbar.classList.remove('backdrop-blur-xl', 'bg-white/95', 'shadow-lg');
            navbar.classList.add('bg-white/90');
        }
        
        // Active section highlighting with improved logic
        let current = '';
        const offset = 200; // Offset for better UX
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            const href = link.getAttribute('href');
            if (href && href.substring(1) === current) {
                link.classList.add('text-primary');
            }
        });
        
        ticking = false;
    }
    
    // Throttled scroll handler for better performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Enhanced smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    closeMobileMenu();
                }
            }
        });
    });
}

// Removed preloader code for instant loading

// Fallback: Hide any remaining preloader elements
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
}, 100);

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animation library with enhanced settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100,
        anchorPlacement: 'top-bottom'
    });
    
    // Populate dynamic content
    populateExperiences();
    populateSkills();
    populateProjects();
    populatePatents();
    populateVolunteering();
    
    // Initialize features
    initializeTypewriter();
    handleContactForm();
    handleMobileMenu();
    handleScrollEffects();
});