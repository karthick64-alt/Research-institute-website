# Research Institute Website

A comprehensive, modern research institute website with unique 3D designs and animations for each page. Built with HTML, CSS, and JavaScript.

## Features

### Design
- **Unique 3D Designs**: Each page has a distinct design with 3D effects and animations
- **Modern UI/UX**: Beautiful, responsive interface with smooth transitions
- **Dark/Light Mode**: Theme toggle functionality
- **Accessibility**: Language switcher, RTL support, contrast controls, font size adjustments

### Main Modules

#### Public Pages
- **Home**: Modern hero section with 3D particles, featured research, stats counter
- **About Us**: Mission & Vision, History Timeline, Leadership, Team Directory, Partners, Testimonials
- **Research & Labs**: Labs listing with 3D cards, research topics index
- **Projects**: Active/Completed projects grid with filtering
- **Publications**: Publication list with filters, citation formats (APA/MLA/Chicago), export options
- **Contact**: Contact form with validation, departmental contacts, map placeholder

#### Authentication
- **Login**: 3D login form with password toggle
- **Register**: User registration (to be implemented)
- **Password Reset**: Password recovery (to be implemented)

#### Admin Dashboard
- **Overview/Analytics**: Key metrics, visitor analytics, charts
- **Content Management**: Page editor, blog/news management
- **Research Management**: Labs, projects, publications management
- **People & Users**: Staff directory, user roles, permissions
- **Grants & Funding**: Grants tracker, donor management
- **Events**: Event creation and management
- **Submissions**: Collaboration requests, contact messages
- **CRM**: Communications, email templates
- **File Manager**: Centralized file management
- **Settings**: Site configuration, theme settings, security

## File Structure

```
Research institute website/
├── index.html              # Home page
├── about.html              # About Us page
├── research.html           # Research & Labs page
├── projects.html           # Projects page
├── publications.html       # Publications page
├── contact.html            # Contact page
├── login.html              # Login page
├── css/
│   ├── main.css           # Base styles and variables
│   ├── home.css            # Home page styles
│   ├── about.css           # About page styles
│   ├── research.css        # Research page styles
│   ├── projects.css        # Projects page styles
│   ├── publications.css    # Publications page styles
│   ├── contact.css         # Contact page styles
│   ├── login.css           # Login page styles
│   └── admin.css           # Admin dashboard styles
├── js/
│   ├── main.js             # Core functionality
│   ├── home.js             # Home page scripts
│   ├── about.js            # About page scripts
│   ├── research.js         # Research page scripts
│   ├── projects.js         # Projects page scripts
│   ├── publications.js     # Publications page scripts
│   ├── contact.js          # Contact page scripts
│   ├── login.js            # Login page scripts
│   └── admin.js            # Admin dashboard scripts
└── admin/
    └── dashboard.html      # Admin dashboard
```

## 3D Effects & Animations

Each page includes unique 3D effects:
- **Home**: 3D particle background, floating cards, animated counters
- **About**: 3D timeline, rotating navigation items, testimonial slider
- **Research**: 3D lab cards with hover effects, topic flip cards
- **Projects**: 3D project cards with perspective transforms
- **Publications**: 3D publication cards with slide animations
- **Contact**: 3D form elements, animated info cards
- **Login**: 3D login wrapper with floating shapes
- **Admin**: 3D dashboard cards with interactive charts

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced animations, 3D transforms, gradients
- **JavaScript**: Interactive functionality, animations
- **Font Awesome**: Icons
- **Canvas API**: Particle animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Setup

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS

## Customization

### Colors
Edit CSS variables in `css/main.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #f59e0b;
    /* ... */
}
```

### Content
Edit HTML files directly to update content.

### Styling
Each page has its own CSS file for easy customization.

## Future Enhancements

- Backend integration for forms and data
- Database connectivity
- User authentication system
- File upload functionality
- Email notifications
- Advanced analytics
- Multi-language content
- SEO optimization

## License

This project is created for the Research Institute website.

## Contact

For questions or support, please contact the development team.

