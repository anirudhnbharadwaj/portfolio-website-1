import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "what i've been working on lately",
  projects: [
    {
      id: getId(),
      name: 'Camera Test App',
      description: 'Production-level Camera Test App used foroptimizing workflows of camera setup, alignment, and testing, crucial for device quality control',
      tasks:
        'Implement classic image processing techniques using OpenCV with a GStreamer backend and PyQt to capture and process 100 frames from two cameras, employing pseudo-multiprocessing for efficiency. ',
      // url: 'https://www.integraleads.xyz/',
      // img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['Python', 'Parallel-Computing', 'Gstreamer', 'OpenCV', 'PyQt', 'Archlinux'],
    },
    {
      id: getId(),
      name: 'EquiCOG',
      description: 'Cranio-Oculography is a procedure used to evaluate and assess the functioning of the vestibular system, which is responsible for your balance, motion and spatial orientation.',
      tasks: 
        'Design and optimize an eye tracker algorithm for simultaneous real-time tracking with 120Hz binocular cameras using OpenCV.',
      // url: 'https://www.uproposalgpt.com/',
      // img: 'https://user-images.githubusercontent.com/68834718/279469731-be163482-20cd-4cb3-8bcb-bbb2c1a345b8.png',
      tags: ['Python', 'Image Processing', 'OpenCV', 'Gstreamer', 'Ubuntu', 'C++'],
    },
  ],
};

export default featuredProjectsSection;
