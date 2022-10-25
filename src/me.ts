import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiLua,
  SiMaterialui,
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  name: "Baptiste Verdier",
  subtitle: "Web Developer student & Software Engineer",
  tagline:
    "I am a web developing student based in Paris, mainly focused on frontend through ReactJS",
  about:
    "Hi, I am Baptiste, I am 19 years old. I was born and I live in Paris. I started learning development during the 2020 lockdown with Lua. I learned the basics of C at Ecole 42 during August 2021. Since sept, 2021 I learn web development at Hetic. I now work for a Large scale-up/Unicorn as a Softawre Engineer specialized in frontend; especially ReactJS",
  location: "Paris, France",
  image: "/assets/lapp.png",
  education: [
    {
      degree: "Bachelors Developer Web",
      major: "- Master CTO & Lead Tech",
      school: "HETIC",
      graduation: "2021 - 2024",
      awards: [""],
    },
    {
      degree: "Baccalauréat, France",
      major: "- Physical Sciences, Mathematics, Economic Sciences",
      school: "Institut de l'Assomption Lübeck",
      graduation: "2021",
      awards: [""],
    },
  ],
  experience: [
    {
      company: "Manomano.com",
      location: "Paris XVII & Bordeaux, France ",
      position: "Software Engineer",
      duration: "Fall 2022 - Present",
      bullets: [
        "",
      ],
    },
    {
      company: "Bleeker",
      location: "Paris IX, France",
      position: "Fullstack Developer Intern",
      duration: "July - September 2022",
      bullets: [
        "",
      ],
    },
  ],
  projects: [
    {
      name: "Capastèque (this site)",
      description: "A website to present my career, skills and projects, named after someone I love.",
      contribution:
        "",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://bmvh.me",
        },
        {
          name: "Github",
          uri: "https://github.com/Hike42/capasteque",
        },
      ],
      image: "/assets/pasteque.png",
    },
    {
      name: "Bleeker Documentation",
      description:
        "A documentation made to help customer developers to integrate Bleeker© solution to their website",
      contribution:
        "I built the whole website by myself, including search engine and language features. It is easily editable thanks to Markdown. For confidentiality reasons, the code isn't open source",
      technologies: [
        "React",
        "Node.js",
        "Amplify",
      ],
      links: [
        {
          name: "Website",
          uri: "https://doc.bleeker.live",
        },
      ],
      image: "/assets/logo.png",
    },
  ],
  skills: [
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Figma",
      icon: FaFigma,
    },
    {
      name: "Lua",
      icon: SiLua,
    },
    {
      name: "MaterialUI",
      icon: SiMaterialui,
    },
  ],
  social: [
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/Hike42",
      hover: {
        bg: "gray.900",
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/baptiste-verdier-a4a467214/",
      hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  ],

  contact: {
    email: "baptiste.verd@gmail.com",
  },
} as IMe;
