import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    // {
    //     id: getId(),
    //     title: 'full stack development',
    //     // animation lottie file: https://lottiefiles.com/
    //     lottie: {
    //     light: '/lotties/frontend.json',
    //     dark: '/lotties/frontend-dark.json',
    //     },
    //     points: [
    //     'Building responsive static websites using Next.js',
    //     'Building responsive Single Page Apps in React.js',
    //     'Building RESTful APIs in Express',
    //     ],
    //     softwareSkills: [
    //       // iconify icons: https://icon-sets.iconify.design/
    //     { name: 'html-5', icon: 'vscode-icons:file-type-html' },
    //     { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
    //     { name: 'sass', icon: 'vscode-icons:file-type-sass' },
    //     { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
    //     {
    //         name: 'typeScript',
    //         icon: 'vscode-icons:file-type-typescript-official',
    //     },
    //     { name: 'python', icon: 'vscode-icons:file-type-python' },
    //     { name: 'nodejs', icon: 'logos:nodejs-icon' },
    //     { name: 'reactjs', icon: 'logos:react' },
    //     { name: 'nextjs', icon: 'logos:nextjs-icon' },
    //       // { name: 'angularjs', icon: 'logos:angular-icon' },
    //     { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
    //     { name: 'redux', icon: 'logos:redux' },
    //     { name: 'database', icon: 'vscode-icons:file-type-sql' },
    //     { name: 'jest', icon: 'vscode-icons:file-type-jest' },
    //     ],
    // },
    {
        id: getId(),
        title: 'Computer Vision & Image Processing',
        lottie: {
        light: '/lotties/artificial_int.json',
        dark: '/lotties/artificial_int.json',
        },
        points: [
        'Develop algorithms for image processing to enhance and manipulate visual data effectively.',
        'Design and optimize computer vision algorithms for precise and robust eye and head tracking applications.',
        'Continuously explore and adopt state-of-the-art techniques in computer vision to improve tracking capabilities and accuracy.',
        'Analyze and interpret visual data to extract meaningful insights and drive impactful solutions.',
        ],
        softwareSkills: [
        { name: 'VS Code', icon: 'devicon:vscode' },
        { name: 'Jupyter Notebook', icon: 'devicon:jupyter' },
        { name: 'Visual Studio', icon: 'devicon:visualstudio' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'OpenCV', icon: 'devicon:opencv' },
        { name: 'PyTorch', icon: 'devicon:pytorch' },
        { name: 'QT', icon: 'devicon:qt' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Pandas', icon: 'logos:pandas-icon' },
        { name: 'Gstreamer', icon: 'simple-icons:gstreamer' },
        { name: 'CPP', icon: 'skill-icons:cpp' },
        { name: 'Arch Linux', icon: 'devicon:archlinux' },
        ],
    },
        {
        id: getId(),
        title: 'Front-End Web dev',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'I enjoy front-end web development as a hobby and am currently a BEGINNER exploring the world of web technologies.',
        'Currently learning Next.js, TypeScript, and Tailwind CSS to build dynamic and responsive static websites..',
        'Creating visually appealing and responsive pages with Tailwind CSS for a seamless user experience.',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'typeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        ],
    },
    ],
};
