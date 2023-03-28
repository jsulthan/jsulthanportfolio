import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sci,
  bmo,
  limpo,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Science Counter Inc",
    icon: sci,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Collaborated with designers and developers to deliver responsive, high-quality web application",
      "Developed and maintained web applications using technologies such as React, Redux, Next.js, and PostgreSQL",
      "Optimized web applications for maximum speed and scalability",
      "Implemented REST APIs to provide data to the front-end and also worked on improving website security by implementing encryption and authentication methods",
      " Improved website performance through optimizing SQL queries and implementing caching strategies.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "BMO (Bank of Montreal)",
    icon: bmo,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - May 2021",
    points: [
      "Leveraged the REST API and internal SQL databases utilizing NodeJS to predict the estimated date of completion for multiple project versions through a linear regression model using story points and status assigned to each issue",
      "Populated a language database using Python and SQL which translates French and English phrases in the database",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Actively engaged in project and team meetings interacting and collaborating with team members and other departments",
    ],
  },
  {
    title: "Junior Front End Developer",
    company_name: "Limpo Services",
    icon: limpo,
    iconBg: "#383E56",
    date: "May 2020 - Sept 2020",
    points: [
      "Designed and developed a user friendly website for a landscaping business",
      " Interactive pages were designed using HTML, Javascript, CSS while utilizing front-end technologies such as React",
      "Performed analysis, review and tested the code which resulted in improved functionality and speed.",
      "Ensured the ad was targeting the right audience resulting in high traffic and increased sales.",
    ],
  },
];

const projects = [
  {
    name: "AI Image Generation App",
    description:
      "Using Full Stack to build an AI image generation app with the help of OpenAI’s Dall-E API that that generates images from text input",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Ticket Reservation",
    description:
      "System is designed so customer can easily reserve tickets. The four steps in this system are Itinerary, Accommodation, Passengers Info, Payment Info",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
