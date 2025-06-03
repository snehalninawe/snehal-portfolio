import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/reactjs.png';
import reduxLogo from './assets/redux.png';
import nextjsLogo from './assets/nextjs.png';
import tailwindcssLogo from './assets/tailwindcss.png';
import pythonLogo from './assets/python.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import cLogo from './assets/c.png';
import cppLogo from './assets/cpp.png';
import vercelLogo from './assets/vercel.png';



import weatherApp from './assets/weatherapp.png'
import smartShop from './assets/Smartshop.png'
import foodGallery from './assets/food-gallery.png'
import clotify from './assets/clothify-image.png'

export const SkillsInfo = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Redux', logo: reduxLogo },
        { name: 'Next JS', logo: nextjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
      ]
    },
    {
        title: 'Languages',
        skills: [
          { name: 'C', logo: cLogo },
          { name: 'C++', logo: cppLogo },
          { name: 'Python', logo: pythonLogo },
          { name: 'JavaScript', logo: javascriptLogo },
        ],
      },
      {
        title: 'Tools',
        skills: [
          { name: 'Git', logo: gitLogo },
          { name: 'GitHub', logo: githubLogo },
          { name: 'VS Code', logo: vscodeLogo },
          { name: 'Vercel', logo: vercelLogo },
        ],
      },
    ];

     export const projects = [
    
    {
      id: 5,
      title: "Weather App",
      description:
        "The Weather App is a responsive web application that allows users to check real-time weather information for any city around the world. It is built using HTML, CSS, and JavaScript, and fetches weather data from a third-party Weather API like OpenWeatherMap.",
      image: weatherApp,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/snehalninawe/weather-website",
      webapp: "https://weather-website-bmc9.vercel.app/",
    },
    {
      id: 6,
      title: "SmartShop",
      description:
        "Smart Shop eCommerce is a fast, responsive online shopping platform built with React, designed to deliver a seamless user experience across devices.",
      image: smartShop,
      tags: ["React JS", "CSS","React-Router"],
      github: "https://github.com/snehalninawe/smart-shop",
      webapp: "https://smart-shop-omega.vercel.app/",
    },
    {
      id: 7,
      title: "Food Gallery",
      description:
        "This Food Gallery is a visually appealing, responsive grid layout designed to showcase food images with smooth animations and an interactive lightbox feature. It is built using HTML, CSS, and JavaScript.",
      image: foodGallery,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/snehalninawe/Food-gallery",
      webapp: "https://food-gallery-ssi7.vercel.app/",
    },
    {
      id: 8,
      title: "Clothify-Website",
      description:
        "Clothify is a stylish e-commerce website built with React and Tailwind CSS, offering a seamless and responsive user experience. It showcases a modern clothing collection with a clean design and intuitive navigation for easy shopping.",
      image: clotify,
      tags: ["React JS","Tailwind CSS"],
      github: "https://github.com/snehalninawe/clothify",
      webapp: "https://clothify-eosin.vercel.app/",
    },
  ];