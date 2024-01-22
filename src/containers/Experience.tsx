'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="relative mb-20 uppercase tracking-[20px] text-3xl ">{experienceSection.title}</h2>
      <TabList experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
