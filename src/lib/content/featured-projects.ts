import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "what i've been working on lately",
  projects: [
    {
      id: getId(),
      name: 'vHIT',
      description: 'Velocity Head Impulase Test measures the vestibulo-ocular reflex (VOR), and is anatomically correlated to semicircular canal function in the peripheral vestibular system, motor nuclei in the brainstem, and extra-ocular muscles.',
      tasks:
        'Research and Development of a vHIT system with remote camera for head and eye tracking',
      // url: 'https://www.integraleads.xyz/',
      // img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['Python', 'Machine Vision', 'Image Processing', 'OpenCV', 'OpenVINO', 'Mediapipe', 'C++'],
    },
    {
      id: getId(),
      name: 'VNG',
      description: 'Video-Nystagmography is a procedure used to evaluate and assess the functioning of the vestibular system, which is responsible for your balance, motion and spatial orientation.',
      tasks:
        'Research and Development of a head mounted VNG system with head and eye tracking.',
      // url: 'https://www.uproposalgpt.com/',
      // img: 'https://user-images.githubusercontent.com/68834718/279469731-be163482-20cd-4cb3-8bcb-bbb2c1a345b8.png',
      tags: ['Python', 'Embedded System', 'Image Processing', 'OpenCV', 'Gstreamer', 'Ubuntu', 'C++'],
    },
  ],
};

export default featuredProjectsSection;
