/**
 * Simple Portfolio - Lightweight JavaScript
 * No heavy animations or 3D effects
 */

// ============================================
// Simple Typewriter Effect
// ============================================

function simpleTypewriter() {
  const element = document.querySelector('.typewriter');
  if (!element) return;

  const words = [
    'AI/ML Engineer',
    'Problem Solver',
    'Technology Enthusiast'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// ============================================
// Populate Skills
// ============================================

// ============================================
// Portfolio Data
// ============================================

const portfolioData = {
  experiences: [
    {
      title: 'AI/ML Engineer',
      company: 'South Guild Tech',
      date: 'April 2024 - Present',
      description: 'Developing AI applications with RAG, managing graph data using Neo4j, and handling MongoDB databases. Performing text analysis and optimizing prompts for improved AI model performance.'
    },
    {
      title: 'Machine Learning Intern',
      company: 'TEKNOCRAT SERVICES LIMITED',
      date: 'April 2024 - August 2024',
      description: 'Contributed to pivotal projects leveraging machine learning and computer vision skills.'
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg Inc.',
      date: 'February 2023 - April 2024',
      description: 'Provided expert knowledge and assistance in various subject areas.'
    },
    {
      title: 'Data Science Intern',
      company: 'Insignia Consultancy Solutions',
      date: 'July 2023 - October 2023',
      description: 'Gained hands-on experience in data science techniques and methodologies.'
    },
    {
      title: 'Teaching Assistant',
      company: 'Coding Ninjas',
      date: 'February 2023 - March 2023',
      description: 'Provided clear explanations and resolved programming doubts for 110+ students, receiving a high rating of 4.67/5.'
    },
    {
      title: 'Web Developer',
      company: 'APhO 2022',
      date: 'December 2021 - June 2022',
      description: 'Created a fully functional website for the Asian Physics Olympiad 2022, commissioned by the Indian government. Implemented effective SEO strategies, achieving top Google rankings.'
    },
    {
      title: 'Web Developer',
      company: 'NaturOganics',
      date: 'December 2021 - April 2022',
      description: 'Developed and optimized a Wix-based website for a startup focused on delivering fresh vegetables. Enhanced content and implemented SEO strategies for improved online visibility.'
    }
  ],
  skills: [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Machine Learning', icon: 'fas fa-brain' },
    { name: 'Deep Learning', icon: 'fas fa-network-wired' },
    { name: 'NLP & LLMs', icon: 'fas fa-language' },
    { name: 'RAG', icon: 'fas fa-robot' },
    { name: 'Neo4j', icon: 'fas fa-project-diagram' },
    { name: 'TensorFlow', icon: 'fab fa-google' },
    { name: 'PyTorch', icon: 'fas fa-fire' },
    { name: 'Computer Vision', icon: 'fas fa-eye' },
    { name: 'Flask', icon: 'fas fa-flask' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'MySQL', icon: 'fas fa-database' }
  ],
  projects: [
    {
      title: 'PathAssist: Dermatopathology AI',
      description: 'AI-powered medical assistant with Neo4j knowledge graph. Built NLP-to-Cypher pipeline with semantic re-ranking (Cohere) and summarization (Claude), achieving 90%+ accuracy.',
      image: 'images/project1.jpg',
      tags: ['Neo4j', 'RAG', 'LLM', 'Python', 'Flask'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Agriculture System',
      description: 'Flask-based platform with drone monitoring, weed/pest detection, and cattle behavior analysis. Implemented real-time farm fire detection with 95% accuracy.',
      image: 'images/project2.jpg',
      tags: ['IoT', 'YOLO v5', 'TensorFlow', 'Flask'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Bell Palsy Face Simulator',
      description: 'AI simulator providing patients visual representation of Bell’s palsy effects using advanced facial recognition. Achieved 85% accuracy in simulating paralysis patterns.',
      image: 'images/project3.jpg',
      tags: ['Computer Vision', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      github: '#',
      demo: '#'
    },
    {
      title: 'FoodLens: AI-Powered Calorie Advisor',
      description: 'Hybrid AI system that calculates calorie intake from food images using YOLO and large language models.',
      image: 'images/project2.jpg',
      tags: ['YOLO', 'LLM', 'Computer Vision', 'Streamlit'],
      github: 'https://github.com/vineetkukreti/Food_calories_advisor',
      demo: '#'
    },
    {
      title: 'Multipara Patient Monitor Data Detector',
      description: 'Software solution to extract and interpret vital signs data from multipara monitors using video feeds.',
      image: 'images/project3.jpg',
      tags: ['Computer Vision', 'Deep Learning', 'Python'],
      github: 'https://github.com/vineetkukreti/vineetkukreti-MultiPara-Monitor-Reading-Detector',
      demo: '#'
    }
  ]
};

// ============================================
// Populate Skills
// ============================================

function populateSkills() {
  const skillsContainer = document.getElementById('skills-grid');
  if (!skillsContainer) return;

  skillsContainer.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-name">${skill.name}</div>
    </div>
  `).join('');
}

// ============================================
// Populate Projects
// ============================================

function populateProjects() {
  const projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;

  projectsContainer.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}" class="project-image" 
           onerror="this.style.display='none'">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.github !== '#' ? `
            <a href="${project.github}" target="_blank" class="project-link">
              <i class="fab fa-github"></i> Code
            </a>
          ` : ''}
          ${project.demo !== '#' ? `
            <a href="${project.demo}" target="_blank" class="project-link">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================
// Populate Experience
// ============================================

function populateExperience() {
  const experienceContainer = document.getElementById('experience-list');
  if (!experienceContainer) return;

  experienceContainer.innerHTML = portfolioData.experiences.map(exp => `
    <div class="experience-item">
      <div class="experience-header">
        <h3 class="experience-title">${exp.title}</h3>
        <div class="experience-company">${exp.company}</div>
        <div class="experience-date">${exp.date}</div>
      </div>
      <p class="experience-description">${exp.description}</p>
    </div>
  `).join('');
}

// ============================================
// Smooth Scroll
// ============================================

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// Mobile Menu
// ============================================

function setupMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuOverlay = document.getElementById('close-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  const closeMenu = () => {
    mobileMenu?.classList.add('hidden');
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeMenuOverlay) {
    closeMenuOverlay.addEventListener('click', closeMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }

  // Close on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================
// Contact Form Handler (EmailJS)
// ============================================

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Prepare template parameters
    // Make sure your EmailJS template uses these variable names:
    // {{from_name}}, {{from_email}}, {{message}}
    const templateParams = {
      from_name: form.querySelector('input[type="text"]').value,
      from_email: form.querySelector('input[type="email"]').value,
      message: form.querySelector('textarea').value,
      to_name: 'Vineet' // Optional, if your template uses it
    };

    // Send email
    // REPLACE 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual IDs
    emailjs.send('service_04j55t8', 'template_iwfx0dp', templateParams)
      .then(function () {
        // Success
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
        submitBtn.style.backgroundColor = '#10b981'; // Green
        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      }, function (error) {
        // Error
        console.error('FAILED...', error);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to Send';
        submitBtn.style.backgroundColor = '#ef4444'; // Red

        alert('Failed to send message. Please try again later or contact me directly at vineetkukreti34@gmail.com');

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      });
  });
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  simpleTypewriter();
  populateSkills();
  populateProjects();
  populateExperience();
  setupSmoothScroll();
  setupMobileMenu();
  setupContactForm(); // Initialize contact form

  console.log('✨ Simple Portfolio Loaded!');
});
