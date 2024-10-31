import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'a lil about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
        'Python',
        'OpenCV',
        'PyQt',
        'NextJs',
        'PyTorch',
        'TailwindCSS',
        'Gstreamer',
        'TypeScript',
        'Archinux',
        'C++',
    ],
    },
    img: '/Anirudh.png',
};