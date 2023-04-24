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
      "Collaborated with designers and developers to deliver responsive, high-quality web application",
      "Developed and maintained web applications using technologies such as React, Node, Next.js Express.js, and MongoDB, resulting in a 20% increase in website speed and a 33% decrease in server response time",
      "Implemented REST APIs to provide data to the front-end while achieving a 80% uptime rate and maintained a 100% success rate for website deployments, ensuring maximum website availability for users",
      "Improved website security by implementing encryption and authentication methods, resulting in a 67% decrease in security vulnerabilities",
      "Populated a language database using Python and SQL which translates French and English phrases in the database, resulting in a more diverse and inclusive user experience",
    ],
  },
  {
    title: "Web Developer (Internship)",
    company_name: "Ryerson University @ CCS",
    icon: bmo,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - May 2021",
    points: [
      "Developed and maintained software solutions on the front end with React/React Native (JavaScript and TypeScript) and the backend with Node.js, Python, and Ruby on Rails.",
      "Interactive pages were designed utilizing efficient front-end technologies which reduced page load time by 40%",
      "Developed and tested API’s along with configuring MongoDB and PostgreSQL databases",
      "Improved user engagement through the development of interactive and engaging pages",
      "Improved website functionality by 35% through the identification and resolution of code-related issues",
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
    image: carrent,
    source_code_link: "https://github.com/jsulthan/ai-generated-app",
  },
];

export { services, experiences, projects };
