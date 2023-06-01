import {
  mobile,
  backend,
  creator,
  web,
  sci,
  bmo,
  carrent,
  jobit,
  tripguide,
  movieapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Science Counter Inc",
    icon: sci,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Collaborated with designers and developers to deliver responsive, high-quality web applications",
      "Built interactive Single Page applications using various technologies such as ReactJS, Nodejs, Express.js, resulting in a 25% increase in user engagement",
      "Developed REST APIs using ASP.NET Core to perform CRUD operations to communicate with MongoDB, resulting in a 30% increase in data update efficiency",
      "Implementing encryption and authentication methods such as  password encryption, multi-factor authentication, and session management, resulting in a 67% decrease in security vulnerabilities",
      "Deployed web applications to AWS Elastic Beanstalk and utilized native CI/CD features to increase developer productivity and reduce time to delivery, resulting in a 40% reduction in deployment time",
      "Implemented containerization using Docker and Kubernetes to improve application portability and scalability",
    ],
  },
  {
    title: "Web Developer (Internship)",
    company_name: "Ryerson University @ CCS",
    icon: bmo,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - May 2021",
    points: [
      "Developed and maintained software solutions on the front end with React/React Native (JavaScript and TypeScript) and the backend with Python and Ruby on Rails.",
      "Design and automate an internal web application on Python-based Django framework, backend logic changes, API requests for JSON-based data.",
      "Manage interchange of complex datasets using Data warehousing, use advanced SQL/TSQL to creating end-to-end enterprise-wide data visualization using PowerBI",
      "Actively engaged in project and team meetings collaborating with team members and other departments",
    ],
  },
];

const projects = [
  {
    name: "T-Shirt AI Image Generation App",
    description:[
      "Built an AI powered app with the help of OpenAI’s Dall-E API that generates a Logo on a T-Shirt from text input",
      "Used 3D models and Animations to create a interactive and engaging page to showcase the products",
      "Download the resulting T-Shirt model image and also deployed using Github Actions",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jsulthan/ai-generated-app",
  },
  {
    name: "Tiktok/Instagram Reel Clone App",
    description: [
      "Built an app that is able to upload, like, comment on, and share the videos. Users are also able to filter by categories and advanced search functionalities through profile pages and suggested accounts",
      "OAuth to login and register users using Google",
      "Sanity is used as the unified platform to manage the entire content of the app",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Next.JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/jsulthan/TiktokCloneApp",
  },
  {
    name: "Music App",
    description: [
      "Mobile app that is similar to Apple Music/Spotify which can play music, search, include lyrics, and discover new songs with recommendation of popular music around you and discover worldwide top charts",
      "Fetch data from sources using RapidAPI",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/jsulthan/MusicApp",
  },
  {
    name: "Movie Streaming Site",
    description:[
      "Developed a multi-page mock streaming site. ",
      "Utilized the TMDB API and Axios to dynamically display data of both movies and TV shows. ",
      "Implemented searching, advanced pagination and filtering.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/jsulthan/MovieApp",
  },
];

export { services, experiences, projects };
