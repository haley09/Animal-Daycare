# Pawsitive Playhouse - Animal Daycare & Boarding Website

Pawsitive Playhouse is a modern, responsive business website designed for an animal daycare and boarding service. The site provides information about services, pricing, daily activities, scheduling, and staff, while offering a clean and user-friendly experience for potential customers.

This project demonstrates full-stack web development, UI/UX design, and structured content organization for a real-world business scenario.

---

## Overview

The website is built as a single-page layout with smooth scrolling navigation. It presents key business information in clearly defined sections, making it easy for users to explore services and understand offerings.

---

## Features

### Home / Hero Section
- Clear value proposition
- Call-to-action buttons for navigation and booking

### Activities
- Overview of daily pet activities
- Optional activity pricing and bundles

### Schedule
- Structured daily schedule for daycare operations

### Services
- Daycare, boarding, and grooming sections
- Pricing breakdowns and bundle options

### Meet the Staff
- Introduces team members to build trust with clients

### Gallery
- Visual representation of the facility and pet activities

### About Us
- Information about the facility and mission

### Contact
- Contact details and an inquiry form backed by PostgreSQL

---

## Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript
- Node.js
- Express
- PostgreSQL
- Google Fonts

---

## Key Concepts Demonstrated

- Responsive web design
- Layout design using CSS Grid and Flexbox
- Semantic HTML structure
- User experience (UX) design principles
- Business-oriented content structuring
- Navigation and section-based design

---

## Project Structure
animal-daycare-website/
    |- index.html
    |- styles.css
    |- script.js
    |- server.js
    |- package.json

---

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` from `.env.example` and add your PostgreSQL connection string:

   ```text
   DATABASE_URL=your-postgres-connection-string
   ```

3. Start the app:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000`.

## Deployment

Deploy as a Node web service. On Render, use:

```text
Build Command: npm install
Start Command: npm start
```

Add these environment variables in the Render dashboard:

```text
DATABASE_URL
NODE_ENV=production
```

Do not commit `.env`.

---

## Project Purpose

This project was originally conceptualized as a course assignment and later redesigned into a portfolio-quality website. It demonstrates the ability to translate a business idea into a structured, visually appealing, and user-friendly web interface.

---

## Future Improvements

- Add real image assets and media
- Add email notifications for new inquiries
- Add booking/reservation date and service fields
- Improve accessibility features
- Deploy as a live hosted website

---

## Author

Haley Abel  
Software Development - Ivy Tech Community College
