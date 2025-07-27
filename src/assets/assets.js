import profile_image from "../assets/profile-image.jpg";
import theme_pattern from "../assets/theme_pattern.svg";
import html_logo from "../assets/icons8-html5.svg";
import css_logo from "../assets/icons8-css3.svg";
import bootstrap_logo from "../assets/icons8-bootstrap.svg";
import tailwind_logo from "../assets/icons8-tailwind-css.svg";
import saas_logo from "../assets/icons8-sass.svg";
import js_logo from "../assets/icons8-javascript.svg";
import typescript_logo from "../assets/icons8-typescript.svg";
import react_logo from "../assets/icons8-react.svg";
import next_logo from "../assets/nextjs-icon-svgrepo-com.svg";
import redux_logo from "../assets/icons8-redux.svg";
import nodejs_logo from "../assets/icons8-node-js-96.svg";
import express_logo from "../assets/icons8-express-js.svg";
import mongodb_logo from "../assets/mongodb-icon-1.svg";
import git_logo from "../assets/icons8-git.svg";
import github_logo from "../assets/icons8-github.svg";
import npm_logo from "../assets/icons8-npm.svg";
import jwt_logo from "../assets/icons8-jwt.svg";

// Projects Image
import car_rental_image from "../assets/projects-image/car_rental.PNG";
import big_ecommerce_image from "../assets/projects-image/big_ecommerce.PNG";
import shoes_ecommerce from "../assets/projects-image/shoes-ecommerce.PNG";
import doctor_appointment_image from "../assets/projects-image/doctor_appointment.PNG";
import grocery_food_image from "../assets/projects-image/Grocery_food.PNG";
import infinte_ecommerce_image from "../assets/projects-image/infinite-ecommerce.PNG";
import food_deliver_image from "../assets/projects-image/food-delivery.PNG";
import product_managment_system_image from "../assets/projects-image/product_management_system.PNG";
import ecommerce_clothing_fullstack from "../assets/projects-image/cloting_ecommerce.PNG";
import frontend_ecommerce from "../assets/projects-image/frontend-ecommerce.PNG";

export const assets = {
  profile_image: profile_image,
  theme_pattern: theme_pattern,
  html_logo: html_logo
}

export const skillsData = [
  {
    skill: "HTML5",
    image: html_logo,
    percentAge: 100,
    delay: 0.2
  },
  {
    skill: "CSS3",
    image: css_logo,
    percentAge: 100,
    delay: 0.4
  },
  {
    skill: "Bootstrap",
    image: bootstrap_logo,
    percentAge: 100,
    delay: 0.6
  },
  {
    skill: "Tailwind",
    image: tailwind_logo,
    percentAge: 100,
    delay: 0.8
  },
  {
    skill: "SaaS",
    image: saas_logo,
    percentAge: 100,
    delay: 1
  },
  {
    skill: "JS",
    image: js_logo,
    percentAge: 100,
    delay: 1.2
  },
  {
    skill: "TS",
    image: typescript_logo,
    percentAge: 100,
    delay: 1.4
  },
  {
    skill: "React.js",
    image: react_logo,
    percentAge: 100,
    delay: 1.6
  },
  {
    skill: "Next.js",
    image: next_logo,
    percentAge: 100,
    delay: 1.8
  },
  {
    skill: "Redux",
    image: redux_logo,
    percentAge: 100,
    delay: 2
  },
  {
    skill: "Node.js",
    image: nodejs_logo,
    percentAge: 70,
    delay: 2.2
  },
  {
    skill: "Express.js",
    image: express_logo,
    percentAge: 80,
    delay: 2.4
  },
  {
    skill: "MongoDB",
    image: mongodb_logo,
    percentAge: 75,
    delay: 2.6
  },
  {
    skill: "Git",
    image: git_logo,
    percentAge: 100,
    delay: 2.8
  },
  {
    skill: "GitHub",
    image: github_logo,
    percentAge: 100,
    delay: 3
  },
  {
    skill: "NPM",
    image: npm_logo,
    percentAge: 100,
    delay: 3.2
  },
]


export const ProjectsData = [
  {
    id: "1",
    title: "Car Rental Web Application – MERN Stack",
    description: "A full-stack Car Rental web application built with the MERN stack. Users can sign up, browse and rent vehicles, while admins can access a dedicated dashboard to manage the fleet. The dashboard includes features such as adding, editing, and deleting cars, real-time status updates, and user-friendly interfaces for administration. The project emphasizes role-based access, efficient state management, and RESTful API integration, making it a solid example of a production-ready web app.",
    features: ["User Authentication", "User Dashboard", "Add Car for Rent", "Car Booking System", "Car Management (Edit/Delete)", "Car Filtering & Search", "Protected Routes", "Fully Responsive Design"],
    image: car_rental_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests)",
      backend: "Node.js, Express.js",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/Car-Rental",
    live_preview: "https://car-rental-frontend-opal-rho.vercel.app",
    delay: 0
  },
  {
    id: "2",
    title: "Full-Stack E-Commerce Web App – MERN Stack",
    description: "A modern and fully responsive E-Commerce web application developed using the MERN Stack. The app provides users with a seamless shopping experience including product listing, product details, cart management, and a personal dashboard. Users can register, log in, and view their purchase-related information in a protected dashboard. The backend handles product storage, user authentication, and order management with secure RESTful APIs, Securely checkout using Stripe Access a personal Dashboard to manage their orders Admins have access to an Admin Panel where they can manage products and monitor orders in real-time. The app features a complete Order Management System, including: The design focuses on usability and clarity, with intuitive navigation, fast performance, and real-time interactivity between frontend and backend.",
    features: ["Product Listing & Detail View", "Dynamic Cart System", "JWT Authentication (Login/Register)", "Stripe Payment Integration", "Order Management", "User/Admin Dashboard", "Fully Responsive Design"],
    image: big_ecommerce_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/Big-Ecommerce",
    live_preview: "https://big-ecommerce-frontend.vercel.app",
    delay: 0.2
  },
  {
    id: "3",
    title: "ShoeStore – Full-Stack E-Commerce App (MERN + Stripe)",
    description: "ShoeStore is a full-stack e-commerce web app for online shoe shopping. It allows users to browse products, add them to a cart, and securely checkout using Stripe. Authenticated users have access to a personal dashboard to track orders, while admins can manage products and view order statuses. Fully responsive and optimized for all devices.",
    features: ["Product Listing & Detail View", "Dynamic Cart System", "JWT Authentication (Login/Register)", "Stripe Payment Integration", "Order Management", "User/Admin Dashboard", "Fully Responsive Design"],
    image: shoes_ecommerce,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/Shoes-Ecommerce",
    live_preview: "https://shoes-ecommerce-frontend-three.vercel.app",
    delay: 0.4
  },
  {
    id: "4",
    title: "Doctor Appointment Booking System – MERN Stack",
    description: "A full-stack Doctor Appointment Booking Web Application built using the MERN stack. The system allows users to register, browse available doctors, and book appointments online with real-time availability. The platform includes secure user authentication, dashboard for users, and a streamlined appointment management system. The app is fully responsive and optimized for all screen sizes, This project showcases a complete user journey from registration to booking, and includes protected routes, MongoDB integration, and RESTful APIs for seamless communication between frontend and backend.",
    features: ["Sign up / Login with authentication (JWT)", "Browse list of doctors", "Book available appointment slots", "View upcoming and past bookings", "Access user dashboard to manage bookings", "User/Admin Dashboard", "Fully Responsive Design"],
    image: doctor_appointment_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/Doctor-Appointment",
    live_preview: "https://doctor-appointment-frontend-opal.vercel.app",
    delay: 0.6
  },
  {
    id: "5",
    title: "Food & Grocery Delivery App (MERN Stack)",
    description: "A full-stack food and grocery e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse and purchase various grocery items through a modern and responsive user interface. It includes user authentication, product management, and a shopping cart system, making it ideal for online grocery delivery services.",
    features: ["Product Listing", "Product Filtering & Categories", "User Authentication", "Shopping Cart", "Order Checkout", "User/Admin Dashboard", "Fully Responsive Design"],
    image: grocery_food_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/food-grocery",
    live_preview: "https://food-grocery-frontend.vercel.app",
    delay: 0.8
  },
  {
    id: "6",
    title: "Infinite E-Commerce Web App (MERN Stack)",
    description: "Infinite is a full-featured e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless online shopping experience with a modern user interface, real-time cart updates, product browsing, and user authentication. Designed for scalability and performance, this project demonstrates core features found in modern e-commerce applications.",
    features: ["Product Browsing", "Search & Filter", "User Authentication", "Shopping Cart", "Order Checkout", "User/Admin Dashboard", "Fully Responsive Design"],
    image: infinte_ecommerce_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/infinite-ecommerce",
    live_preview: "https://inffinite-ecommerce-frontend.vercel.app",
    delay: 1
  },
  {
    id: "7",
    title: "Full Stack Food Delivery App",
    description: "A fully functional food delivery web application built with the MERN stack. The app features a modern and responsive user interface for customers to browse meals and place orders, along with a powerful admin dashboard for managing products, orders, and users. It delivers a smooth user experience and is designed to work seamlessly across all devices.",
    features: ["Product Browsing", "Search & Filter", "User Authentication", "Shopping Cart", "Order Checkout", "User/Admin Dashboard", "Fully Responsive Design"],
    image: food_deliver_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/Food-Del",
    live_preview: "https://food-del-frontend-omega.vercel.app",
    delay: 1.2
  },
  {
    id: "8",
    title: "Full Stack Product Management System",
    description: "A full stack product management system built with the MERN stack. The application allows authenticated users to manage a list of products through a clean and user-friendly interface. Users can securely log in, create new products, edit existing ones, and delete them. The system ensures data is dynamically updated and securely handled with real-time feedback.",
    features: ["Authentication System (Login with email & password)", "Product CRUD Functionality", "Add new products", "Edit existing products", "Delete products", "View all products in a structured layout", "Fully Responsive Design"],
    image: product_managment_system_image,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/CRUD-fullstack",
    live_preview: "https://crud-fullstack-frontend.vercel.app",
    delay: 1.4
  },
  {
    id: "9",
    title: "Full‑Stack Clothing E‑Commerce Application",
    description: "Clothy is a modern full-stack clothing e-commerce application built using the MERN stack. It offers users a smooth and responsive shopping experience where they can browse clothing items, search and filter by categories, add items to cart, and complete purchases securely through Stripe. The application also includes a powerful admin dashboard for managing products, users, and orders efficiently.",
    features: ["Dynamic Product Catalog", "Search & Filter", "User Authentication", "Shopping Cart", "Stripe Payment Integration", "Order Tracking", "Admin Dashboard", "Dark Mode Support", "Fully Responsive Design"],
    image: ecommerce_clothing_fullstack,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "Node.js, Express.js, Stripe API",
      database: "MongoDB + Mongoose",
      authentication: "JWT (JSON Web Token), Protected Routes",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs, Form Validation, Error Handling"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo, nodejs_logo, express_logo, mongodb_logo, jwt_logo],
    github_url: "https://github.com/MostafaYassin90/ECommerce-MernStack",
    live_preview: "https://e-commerce-fullstack-frontend.vercel.app",
    delay: 1.6
  },
  {
    id: "10",
    title: "FashionFi – React Clothing E‑Commerce Store",
    description: "FashionFi is a modern, responsive clothing e‑commerce web application built with React and deployed on Vercel. It delivers a seamless shopping experience—enabling users to browse apparel items, search by category or keywords, manage a dynamic cart, and simulate checkout securely. Optimized for performance and built as a single‑page app (SPA), it’s ideal as a frontend showcase.",
    features: ["Apparel Catalog", "Search & Filter", "Cart Management", "Responsive Layout", "SPA Performance", "API Integration (Mock/Fake API)", "User‑Friendly UI", "Demo Checkout Flow", "Fully Responsive Design"],
    image: frontend_ecommerce,
    tech_stack: {
      frontend: "React.js, Tailwind CSS, React Router DOM, Axios (for API requests), React Stripe",
      backend: "",
      database: "",
      authentication: "",
      hosting: "Vercel",
      others: "Responsive Design, RESTful APIs"
    },
    skills: [html_logo, css_logo, tailwind_logo, js_logo, react_logo],
    github_url: "https://github.com/MostafaYassin90/E-Commerce-React-Project",
    live_preview: "https://e-commerce-react-project-vert.vercel.app",
    delay: 1.8
  },
]

import github_connect_image from "../assets/icons8-github.svg";
import linkedin_connect_image from "../assets/icons8-linkedin.svg";
import facebook_connect_image from "../assets/icons8-facebook-logo.svg";
import instagram_connect_image from "../assets/icons8-instagram-logo.svg";
import email_connect_image from "../assets/email.png";

export const connectData = [
  {
    title: "GitHub",
    image: github_connect_image,
    path: "https://github.com/MostafaYassin90"
  },
  {
    title: "LinkedIn",
    image: linkedin_connect_image,
    path: "https://www.linkedin.com/in/mostafa-yassin-44983a262"
  },
  {
    title: "Facebook",
    image: facebook_connect_image,
    path: "https://www.facebook.com/mostafayassin0"
  },
  {
    title: "Instagram",
    image: instagram_connect_image,
    path: "https://www.instagram.com/mostafa_.yassin"
  },
  {
    title: "Contact",
    image: email_connect_image,
    path: "https://mail.google.com/mail/u/0/?fs=1&to=mostafayassin292@gmail.com&tf=cm"
  },

]