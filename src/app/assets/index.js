// Hero
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'

import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
    <InstagramLineIcon />,
    <FacebookCircleLineIcon />,
    <DribbbleLineIcon />,
    <YoutubeLineIcon />,
    <GithubLineIcon />,
]

// About Me
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'

export const aboutData = [
    {
        title: 'GitHub Repositories',
        amount: 11,
        icon: <GithubFillIcon />,
    },
    {
        title: 'Fullstack Projects',
        amount: 4,
        icon: <Projector2LineIcon />,
    },
    {
        title: 'Core Technologies',
        amount: 5,
        icon: <GroupLineIcon />,
    },
    {
        title: 'Years Self-Taught',
        amount: 5,
        icon: <AwardFillIcon />,
    },
];

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText = `I’m Tan Nhi, a freelance full-stack developer from VietNam.

I specialize in building modern web applications using React, Next.js, TypeScript, NestJS, and Java Spring Boot, with experience in PostgreSQL and MongoDB.

I enjoy solving real-world problems through clean, scalable, and user-focused solutions.
`;
// End of About Me

// Experience
export const experienceData = [
    {
        year: '2021 - 2022',
        title: 'Programming Foundation',
        education:
            'Started Software Application Development at FPT Polytechnic College.',
        experience: [
            'Built strong foundation in programming, OOP, database, and algorithms.',
            'Learned HTML, CSS, JavaScript, Java Core, and SQL fundamentals.',
        ],
    },
    {
        year: '2023',
        title: 'Frontend Development Journey',
        education:
            'Focused on modern frontend technologies and UI/UX practices.',
        experience: [
            'Learned ReactJS, TypeScript, responsive design, and component-based architecture.',
            'Built personal and academic projects to strengthen frontend skills.',
        ],
    },
    {
        year: '2024',
        title: 'Real-World Development Experience',
        education:
            'Applied academic knowledge in enterprise development environments.',
        experience: [
            'Interned at VNPT Soc Trang as Frontend Developer Intern.',
            'Developed frontend modules and integrated REST APIs.',
            'Worked with AngularJS, Spring Boot, SQL Server, and RBAC systems.',
        ],
    },
    {
        year: '2025',
        title: 'Fullstack Project Development',
        education:
            'Started Information Technology degree at Can Tho University.',
        experience: [
            'Built a fullstack bookstore e-commerce platform.',
            'Developed frontend with ReactJS + TypeScript.',
            'Implemented backend APIs with ExpressJS and MongoDB.',
            'Integrated VNPay payment gateway and business workflows.',
        ],
    },
    {
        year: '2026 - Future',
        title: 'Fullstack Engineer Career Path',
        education:
            'Continuously improving scalable system design and backend architecture.',
        experience: [
            'Interned at CCVI Technology with ReactJS, NextJS, TypeScript, and automation workflows.',
            'Target career path: Fullstack Java Developer (Spring Boot) or Fullstack JavaScript Developer (NodeJS/NestJS).',
            'Focusing on building scalable, production-ready fullstack applications.',
        ],
    },
]

// Skills
export const skillsData = [
    { name: 'HTML', icon: '/skills/html.png' },
    { name: 'CSS', icon: '/skills/css.png' },
    { name: 'JavaScript', icon: '/skills/js.png' },
    { name: 'TypeScript', icon: '/skills/ts.png' },
    { name: 'ReactJS', icon: '/skills/react.png' },
    { name: 'NextJS', icon: '/skills/nextjs.png' },
    { name: 'TailwindCSS', icon: '/skills/tailwind.png' },
    { name: 'MUI', icon: '/skills/mui.svg' },
    { name: 'Bootstrap', icon: '/skills/bootstrap.svg' },
    { name: 'Framer Motion', icon: '/skills/framer.png' },
    { name: 'Vite', icon: '/skills/vite.png' },

    { name: 'NodeJS', icon: '/skills/nodejs.png' },
    { name: 'Java', icon: '/skills/java.svg' },
    { name: 'ExpressJS', icon: '/skills/express.svg' },
    { name: 'NestJS', icon: '/skills/nestjs.svg' },
    { name: 'Spring Boot', icon: '/skills/spring.svg' },

    { name: 'MongoDB', icon: '/skills/mongodb.png' },
    { name: 'MySQL', icon: '/skills/mysql.svg' },
    { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },

    { name: 'Figma', icon: '/skills/figma.png' },
    { name: 'Photoshop', icon: '/skills/photoshop.png' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'VS Code', icon: '/skills/vscode.png' },
    { name: 'GitHub', icon: '/skills/github.png' },
    { name: 'Postman', icon: '/skills/postman.svg' },
];

// Projects
export const projectsData = [
    {
        name: 'Bookstore Management Website',
        desc: 'Built a full-stack e-commerce platform with product, order, and user management. Implemented shopping cart functionality, REST API integration, and VNPay payment gateway.',
        image: '/projects/image-1.jpg',
        tech: ['ReactJS', 'TypeScript', 'ExpressJS', 'MongoDB', 'Fullstack', 'UI/UX'],
        github: 'https://github.com/Tan-Nhi/bookstore-web',
        demo: 'https://bookstore-web-rouge.vercel.app',
    },
    {
        name: 'Personal Portfolio Website',
        desc: 'Designed and developed a responsive portfolio website to showcase projects, technical skills, and professional experience with modern UI and smooth animations.',
        image: '/projects/image-2.jpg',
        tech: ['NextJS', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Frontend', 'UI/UX'],
        github: 'https://github.com/Tan-Nhi/portfolio_v2',
        demo: 'https://portfolio-tannhi.xyz',
    },
]

export const projectsButton = [
    'All',
    'Frontend',
    'Fullstack',
    'Backend',
    "NestJS",
    "Java Spring",
    'UI/UX',
]

//Reviews 
export const reviewsData = [
    {
        avatar: 'MH',
        name: 'Dinh Minh Hoanh',
        role: "Internship Mentor",
        comment: "Tan Nhi consistently demonstrated responsibility and professionalism throughout the internship. He completed assigned tasks on schedule, maintained clear communication, and showed a strong commitment to delivering quality work.",
        stars: [1, 1, 1, 1, 1],
    },
    {
        avatar: 'DN',
        name: 'Nguyen Dinh Ngoc',
        role: 'Lecturer',
        comment:
            "Tan Nhi is a highly self-motivated student with a strong commitment to continuous learning. Throughout the capstone project, he consistently took the initiative to explore new technologies and successfully delivered the assigned tasks.",
        stars: [1, 1, 1, 1, 1],
    },
    {
        avatar: 'TB',
        name: 'Ta Thien Bao',
        role: 'Software Developer',
        comment:
            "Tan Nhi is a reliable teammate with strong problem-solving skills. He communicates effectively, adapts quickly to new technologies, and consistently contributes to the success of the team.",
        stars: [1, 1, 1, 1, 1],
    }
]

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]


import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />


import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'


export const navbarData = [
    {
        id: 'home',
        name: 'Home',
        icon: <Home5LineIcon />,
    },
    {
        id: 'about',
        name: 'About',
        icon: <UserLineIcon />,
    },
    {
        id: 'experience',
        name: 'MyRoad',
        icon: <HistoryLineIcon />,
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: <BriefcaseLineIcon />,
    },
    {
        id: 'projects',
        name: 'Projects',
        icon: <ProjectorLineIcon />,
    },
    {
        id: 'reviews',
        name: 'Reviews',
        icon: <UserStarLineIcon />,
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: <ContactsBook2LineIcon />,
    },

]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
