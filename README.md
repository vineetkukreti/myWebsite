# Vineet Kukreti - AI/ML Engineer Portfolio

A modern, responsive portfolio website showcasing AI/ML projects, experience, and expertise.

## Features

✨ **Modern Design System**

- Clean, minimalist interface with professional typography
- Responsive design that works on all devices
- Smooth animations and micro-interactions
- Glass morphism and modern visual effects

🤖 **AI/ML Focus**

- Categorized skill showcase
- Project portfolio with live demos
- Patent documentation
- Technical experience timeline

📧 **Contact Integration**

- Working contact form with EmailJS
- Real-time form validation
- Success/error messaging
- Professional contact information

🚀 **Performance Optimized**

- Fast loading times
- Optimized images
- Semantic HTML structure
- SEO-friendly meta tags

## Setup Instructions

### 1. EmailJS Configuration

To enable the contact form, you need to set up EmailJS:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Create an email service**:

   - Go to Email Services and add a new service
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create an email template**:

   - Go to Email Templates and create a new template
   - Use these variables in your template:
     - `{{user_name}}` - Sender's name
     - `{{user_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (vineetkukreti34@gmail.com)
   - Note down the Template ID

4. **Get your Public Key**:

   - Go to Account > General
   - Copy your Public Key

5. **Update the configuration**:
   Replace the placeholders in `index.html` and `script.js`:

   ```javascript
   // In index.html
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

   // In script.js
   const response = await emailjs.send(
     "YOUR_SERVICE_ID", // Replace with your service ID
     "YOUR_TEMPLATE_ID", // Replace with your template ID
     formData
   );
   ```

### 2. Customization

**Personal Information**: Update the following in `script.js`:

- Experience details
- Skills and categories
- Project information
- Contact information

**Images**: Replace the placeholder images in the `images/` folder:

- `header-ai.jpg` - Hero section image
- `profile.jpg` - About section profile photo
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project images
- `patent1.jpg`, `patent2.jpg`, `patent3.jpg` - Patent images

**Colors**: Modify the color scheme in `styles.css`:

```css
:root {
  --primary: #6366f1; /* Main brand color */
  --secondary: #8b5cf6; /* Secondary color */
  --accent: #06b6d4; /* Accent color */
}
```

### 3. Analytics Setup

The website includes Google Analytics. Update the tracking ID in `index.html`:

```html
gtag('config', 'G-QF4DN36K3G'); // Replace with your GA4 ID
```

### 4. SEO Optimization

Update meta tags in `index.html`:

- Title tag
- Meta description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styles
├── README.md          # This file
└── images/            # Image assets
    ├── header-ai.jpg
    ├── profile.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    ├── patent1.jpg
    ├── patent2.jpg
    └── patent3.jpg
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: AOS (Animate On Scroll)
- **Email**: EmailJS
- **Analytics**: Google Analytics 4
- **Fonts**: Inter, Space Grotesk (Google Fonts)
- **Icons**: Font Awesome

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: Respects user's motion preferences
- **Efficient Scrolling**: Throttled scroll events
- **Compressed Assets**: Optimized images and fonts

## Accessibility

- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Visible focus indicators

## Deployment

1. **GitHub Pages**: Push to a GitHub repository and enable Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Connect your GitHub repository
4. **Custom Hosting**: Upload files to any web server

## Contact

For questions about this portfolio template:

- Email: vineetkukreti34@gmail.com
- LinkedIn: [vineetkukretii](https://www.linkedin.com/in/vineetkukretii/)
- GitHub: [vineetkukreti](https://github.com/vineetkukreti)

---

