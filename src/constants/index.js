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
    meta,
    // starbucks,
    lodgistics,
    // tesla,
    umd,
    fitness,
    wheel,
    timer,
    threejs,
    h3c,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
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
      title: "Software Engineer",
      company_name: "Lodgistics",
      icon: lodgistics,
      iconBg: "#383E56",
      date: "August 2020 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "University of Maryland",
      icon: umd,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Developed and optimized a fuzzy word algorithm for data matching, significantly improving accuracy.Addressed anomalies in similarity scores, enhancing the program's reliability and relevance.",
        "Conducted thorough testing and analysis, providing actionable insights for continuous algorithmic improvement.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Collaborated with cross-functional teams to resolve matching and scoring issues efficiently.",
      ],
    },
    {
      title: "Software Engineer Intern - Front end",
      company_name: "H3 Collaboratory",
      icon: h3c,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Fit Reactor - Fitness Application",
      description:
        "Fit Reactor provides users with workout ideas to build strength, improve endurance, or lose weight, this app has you covered.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      source_code_link: "https://github.com/khotpriyanka/fitness-app-react",
    },
    {
      name: "Wheel of Prices",
      description:
        "The React Wheel of Prices is a fun and interactive web application built with React.js that puts a delightful spin on decision-making and games of chance. It's a digital version of the classic game show wheel, offering users a unique way to make choices, select prizes, or simply add an element of excitement to their online experiences.",
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
      image: wheel,
      source_code_link: "https://github.com/khotpriyanka/react-wheel-of-prices",
    },
    {
      name: "Countdown Timer",
      description:
        "The Countdown Timer in Python is a lightweight and versatile command-line application designed to help users track time, manage tasks, and stay organized. This simple yet effective tool provides users with the ability to create and customize countdown timers, ensuring they never miss important deadlines or events.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
      ],
      image: timer,
      source_code_link: "https://github.com/khotpriyanka/countdown-timer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };