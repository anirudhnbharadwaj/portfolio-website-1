import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: "Hii 👋, the name's",
    title: 'Anirudh N Bharadwaj.',
    tagline: 'Transforming Pixels into Progress!',
    // : Bringing Vision to Innovation.
    description:
    "Embark on an odyssey through the lens of a Computer Vision Engineer from India. Welcome to my digital realm, where innovation meets pixels. Enjoy the journey!",
    // specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};