import { Project, Experience, Stat, SkillCategory } from './types';
import velmoraVideo from './assets/videos/velmoraNowVideo.mp4';
import jiraBoardVideo from './assets/videos/jiraBoardVideo.mp4';
import pharmafuseVideo from './assets/videos/pharmafuseVideo.mp4';
import studioVarnVideo from './assets/videos/studio-varn-video.mp4';
import uniqueenVideo from './assets/videos/uniqueencream.mp4';
import shrikptiwariVideo from './assets/videos/shrikptiwari.mp4';
import reactHooksLabImage from './assets/images/react-hooks-lab.png';
import smartTaskManagerImage from './assets/images/smart-task-manager.png';


export const stats: Stat[] = [
  {
    label: 'Projects Delivered ',
    value: '200+',
    description: 'Client Satisfaction Index based on modern UX delivery and speed.',
  },
  {
    label: 'Years of Experience',
    value: '4+',
    description: 'Average turnaround communication response time for active projects.',
  },
  {
    label: 'Technologies & Tools',
    value: '15+',
    description: 'Core developer libraries, frameworks, and visual tools used on a daily basis.',
  },
  {
    label: 'Responsive UI',
    value: '100%',
    description: 'Clean, reliable system architecture and perfect code standards.',
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Frontend Developer',
    company: 'Dots & Coms',
    period: 'Nov 2022 - Present',
    bullets: [
      'Delivered 200+ front-end projects including new builds, redesigns, and long-term maintenance.',
      'Developed and scaled React.js and ASP.NET applications using reusable components, hooks, and modular architecture.',
      'Converted Figma and Photoshop designs into responsive, mobile-first, pixel-perfect interfaces using React.js, Tailwind CSS, and Bootstrap.',
      'Implemented SEO strategies using SEMrush and SiteChecker, consistently achieving 90+ SEO scores.',
      'Optimized performance using code splitting, lazy loading, and best frontend practices, improving page speed by up to 40%.',
      'Led 80+ projects end-to-end, managing development, testing, deployment, and performance monitoring.',
      'Handled end-to-end website deployment and production updates using FileZilla.',
      'Mentored junior developers, improving team productivity and enabling independent project delivery.',
    ],
    tags: ['React.js', 'ASP.NET', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'SEMrush', 'SiteChecker', 'FileZilla'],
  },
  {
    id: 'exp2',
    role: 'Frontend Developer',
    company: 'Technobits Digital',
    period: 'Jul 2021 - Aug 2022',
    bullets: [
      'Contributed to projects including cryptocurrency platforms, dashboards, CRM systems, and web applications.',
      'Developed React.js applications using React Hooks, React Router, reusable components, and form validation.',
      'Built responsive, cross-browser interfaces using HTML5, CSS3, Bootstrap, JavaScript, jQuery, and Django.',
      'Improved search rankings using SEO strategies and Ahrefs, and created responsive email campaigns via EasySendy.',
      'Collaborated using GitHub for version control and team workflows.',
    ],
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Django', 'Ahrefs', 'EasySendy', 'GitHub'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Tech',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3/SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'jQuery',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'GitHub',
      'FileZilla',
      'Figma',
      'Photoshop',
    ],
  },
  {
    title: 'CMS / SEO',
    skills: [
      'Shopify',
      'WordPress',
      'SEMrush',
      'SiteChecker',
      'Ahrefs',
    ],
  },
];
export const projects: Project[] = [
 {
  id: 'proj1',
  category: 'Live Project',
   videoUrl:velmoraVideo,
  title: 'Velmora Now',
  description:
    'Designed and developed end-to-end: a frontend utility platform featuring browser-based health calculators (BMI, BMR, Protein, Macros, Water Intake), image compression & QR generation tools, and a dynamic blog. Set up full SEO strategies, Google Search Console, and Google Analytics to track user retention and index web assets.',
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO'],
  liveUrl: 'https://www.velmoranow.in',
  githubUrl: 'https://github.com/chaitali-more/Velmora',
 
},
{
  id: 'proj4',
  category: 'Live Project',
  videoUrl: studioVarnVideo,
  title: 'Studio Varn',
  description:
    'Designed and developed a modern business website from scratch using Next.js and TypeScript. Built responsive UI components, implemented reusable architecture, optimized performance, and configured technical SEO. Integrated Google Analytics and Google Search Console for traffic monitoring, indexing, and search performance, then deployed the application on Vercel.',
  tags: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Vercel',
    'SEO',
  ],
  liveUrl: 'https://www.studiovarn.com/',
  githubUrl: 'https://github.com/chaitali-more/studio_varn_new',
},
{
  id: 'proj5',
  category: 'Live Project',
  videoUrl: uniqueenVideo,
  title: 'Uniqueen Cream',
  description:
    'Developed a premium e-commerce platform for science-backed skin depigmentation care under WHO GMP standards. Engineered using Next.js and TypeScript, incorporating optimized product catalogs, clinical-grade formulation showcases, full technical SEO, and seamless device-responsive user journeys.',
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'E-commerce', 'SEO'],
  liveUrl: 'https://www.uniqueencream.com/',
  githubUrl: 'https://github.com/chaitali-more/uniqueen',
},
{
  id: 'proj6',
  category: 'Live Project',
  videoUrl: shrikptiwariVideo,
  title: 'Pandit Shri Kashi Prasad Tiwari Trust',
  description:
    'Designed and developed a public charitable trust portal dedicated to compassion, humanity, and selfless service. Integrated pages for education support, healthcare programs, and community welfare initiatives in Prayagraj, optimizing for performance, accessibility, and high search visibility.',
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO'],
  liveUrl: 'https://www.shrikptiwari.org/',
  githubUrl: 'https://github.com/chaitali-more/PanditShriKashiPrasadTiwariTrust',
},
{
  id: 'proj2',
  category: 'Practice Project',
  videoUrl:jiraBoardVideo,
  title: 'Jira-Style Task Board (Drag & Drop)',
  description:
    'A task management board that replicates Jira’s workflow experience. It includes drag-and-drop functionality implemented without using any external libraries. Users can create, move, and delete tasks effortlessly across different columns, with all data persisted in Local Storage to ensure tasks remain saved even after a page reload. The project also handles form submissions for task creation, offers a responsive UI.',
  tags: ['React.js', 'Netlify'],
  liveUrl: 'https://jira-board-drag-drop.netlify.app/',
  githubUrl: 'https://github.com/chaitali-more/',
 
},
  {
    id: 'proj_hooks',
    category: 'Practice Project',
    imageUrl: reactHooksLabImage,
    title: 'React Hooks & Lifecycle Lab',
    description:
      'An interactive learning and exploration dashboard designed to visualize React hook mechanisms, component lifecycles, and rendering behaviors. Features live state tracking, action logs, and performance demonstrations of core hooks (useState, useEffect, useRef, useContext, forwardRef) and advanced APIs (useReducer, useMemo, useID, useTransition) built with Tailwind CSS.',
    tags: ['React.js', 'Tailwind CSS', 'TypeScript', 'Hooks', 'Vercel'],
    liveUrl: 'https://react-hooks-jet-seven.vercel.app/',
    githubUrl: 'https://github.com/chaitali-more/React-Hooks',
  },
  {
    id: 'proj_smart_task_manager',
    category: 'Practice Project',
    imageUrl: smartTaskManagerImage,
    title: 'Smart Task Manager',
    description:
      'Developed a modern Smart Task Manager using React.js and Tailwind CSS with CRUD features, search, filtering, real-time stats, dark/light mode, form validation, and Local Storage. Applied React Hooks such as useState, useEffect, useContext, useMemo, and useRef to manage state, optimize performance, handle side effects, eliminate prop drilling through Context API, and improve user experience.',
    tags: [
      'React.js',
      'Tailwind CSS',
      'JavaScript',
      'React Context API',
      'React Hooks',
      'Local Storage',
      'Vercel',
    ],
    liveUrl: 'https://smart-task-manager-gold-eight.vercel.app/',
    githubUrl: 'https://github.com/chaitali-more/smart-task-manager',
  },
{
  id: 'proj3',
  category: 'Practice Project',
   videoUrl:pharmafuseVideo,
  title: 'Pharmafuse',
  description:
    'Built a dynamic and responsive pharmaceutical information portal using React, leveraging useState, useEffect, and React Router for efficient state management and navigation. Optimized performance, integrated third-party plugins for form validation/API handling, and deployed on Netlify to deliver a smooth, production-ready user experience.',
  tags: ['React.js', 'Bootstrap', 'Netlify'],
  liveUrl: 'https://pharmafuse.netlify.app/',
  githubUrl: 'https://github.com/chaitali-more/',
 
},
 
];
