# EasyGo Delivery Services - Homepage

A pixel-perfect React + Tailwind CSS implementation of the EasyGo delivery services homepage.

## Features

- Fully responsive design
- React 18 with modern hooks
- Tailwind CSS for styling
- All images and resources from the design
- Pixel-perfect matching to the reference design
- Modular component structure for easy maintenance

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

## Project Structure

```
assesement/
├── public/
│   ├── index.html
│   ├── logo.png
│   ├── hero_pic.jpg
│   ├── background_pic.jpg
│   ├── login.svg
│   ├── signup.svg
│   └── [all other images]
├── src/
│   ├── components/
│   │   ├── Navbar.js          - Navigation header with logo and menu
│   │   ├── Hero.js             - Hero section with CTA buttons
│   │   ├── HowItWorks.js       - 4-step process section
│   │   ├── WhyChooseUs.js      - Feature highlights with icons
│   │   ├── Services.js         - Service cards (Standard & Express)
│   │   ├── Testimonials.js     - Customer reviews slider
│   │   ├── AppDownload.js      - App promotion with store links
│   │   ├── Footer.js           - Footer with links and social media
│   │   └── index.js            - Component exports
│   ├── pages/
│   │   ├── Home.js             - Homepage with all sections
│   │   ├── Login.js            - Login page with form
│   │   ├── Signup.js           - Signup page with form
│   │   └── index.js            - Page exports
│   ├── App.js                  - Main application with routing
│   ├── index.js                - React DOM entry point
│   └── index.css               - Global styles with Tailwind
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Component Architecture

The application is built with a modular component structure:

### Layout Components
- **Navbar**: Top navigation with responsive menu and auth buttons
- **Hero**: Full-width hero section with background image overlay
- **Footer**: Multi-column footer with company info and links

### Content Sections
- **HowItWorks**: Step-by-step guide with numbered items
- **WhyChooseUs**: Grid of feature cards with icons
- **Services**: Service offerings with delivery time info
- **Testimonials**: Customer review cards with navigation
- **AppDownload**: Mobile app promotion with download buttons

Each component is:
- Self-contained with its own logic and styling
- Reusable and easy to maintain
- Props-ready for future dynamic data integration

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Tailwind CSS 3.3.0
- React Scripts 5.0.1

## Routes

- `/` - Homepage with all sections
- `/login` - Login page
- `/signup` - Signup/Registration page

## Next Steps

To make the application more dynamic:
1. Add state management (Redux/Context) for testimonials slider
2. Connect to a backend API for dynamic content
3. Add form validation for booking/signup
4. Implement routing with React Router for multi-page experience
