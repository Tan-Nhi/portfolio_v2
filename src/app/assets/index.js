// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
    <InstagramLineIcon />,
    <FacebookCircleLineIcon />,
    <DribbbleLineIcon />,
    <YoutubeLineIcon />,
    <GithubLineIcon />,
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

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
        amount: 2,
        icon: <AwardFillIcon />,
    },
];
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

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
    "ReactJS",
    "NextJS",
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

// Pricing Plans
export const pricingPlans = [
    {
        title: 'Basic',
        pricing: '$500 - $1,000',
        features: [
            'Up to 5 pages',
            'Responsive design ',
            'Basic SEO ',
            'Contact form',
            'Social media links',
            '1 month support',
        ],
        recommended: 'Small businesses, personal websites, bloggers',
    },
    {
        title: 'Premium',
        pricing: '$5,000 - $10,000',
        features: [
            'Unlimited pages',
            'Responsive design',
            'Comprehensive SEO',
            'Contact form ',
            'Social media links',
            'Advanced security',
            'E-commerce (unlimited products)',
            'Blog setup',
            'Google Analytics with custom reports',
            '6 months support',
        ],
        recommended: 'Medium-sized businesses, online stores, service providers',
    },
    {
        title: 'Standard',
        pricing: '$1,500 - $3,000',
        features: [
            'Up to 10 pages',
            'Responsive design',
            'Advanced SEO',
            'CContact form',
            'Social media links',
            'E-commerce (20 products)',
            'Blog setup',
            'Google Analytics',
            '3 months support',
        ],
        recommended: 'Large businesses, complex e-commerce sites, custom web applications',
    },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
    {
        question: 'How much do you charge for a website?',
        answer:
            'Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.',
    },
    {
        question: 'Why are you so expensive?',
        answer:
            'he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money',
    },
    {
        question: 'How long does it take to build a website?',
        answer:
            'It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.',
    },
    {
        question: 'How do we communicate throughout the website build?',
        answer:
            'Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.',
    },
    {
        question: 'What will you need from me?',
        answer:
            'It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…',
    },
    {
        question: 'What if I don’t like the website?',
        answer:
            'You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.',
    },
    {
        question: 'Do you offer a payment schedule?',
        answer:
            'Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.',
    },
    {
        question: 'Can I make the final payment when the site is ready to go live?',
        answer:
            'No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.',
    },
    {
        question: 'Who hosts the website?',
        answer:
            'If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.',
    },
    {
        question: 'Can I update the website myself once it’s been built?',
        answer:
            'Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.',
    },
    {
        question: 'What if I don’t want to manage the website at all. Can you do it all for me?',
        answer:
            'Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.',
    },
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

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
        id: 'reviews',
        name: 'Reviews',
        icon: <UserStarLineIcon />,
    },
    {
        id: 'projects',
        name: 'Projects',
        icon: <ProjectorLineIcon />,
    },
    {
        id: 'pricing',
        name: 'Pricing',
        icon: <PriceTag3LineIcon />,
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: <ContactsBook2LineIcon />,
    },
    {
        id: 'questions',
        name: 'Questions',
        icon: <QuestionAnswerLineIcon />,
    },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
