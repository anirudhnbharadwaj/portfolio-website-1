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
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Develop algorithms for image processing to enhance and manipulate visual data.',
        'Develop and optimize computer vision algorithms for accurate and robust eye tracking and head tracking.',
        'Continuously explore and adopt state-of-the-art techniques in computer vision to enhance the capabilities and accuracy of tracking.',
        'Analyze and interpret visual data to extract meaningful insights.',
        ],
        softwareSkills: [
        { name: 'VS Code', icon: 'devicon:vscode' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'OpenCV', icon: 'devicon:opencv' },
        { name: 'Pandas', icon: 'logos:pandas-icon' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Gstreamer', icon: 'simple-icons:gstreamer' },
        { name: 'Linux', icon: 'devicon:linux' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'CPP', icon: 'skill-icons:cpp' },
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
        'I pursue front-end web dev as a hobby and am a BEGINNER. I am currently learning Next.js, TypeScript and Tailwind CSS',
        'Building responsive static websites using Next.js.',
        'Styling pages Tailwind CSS.',
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
