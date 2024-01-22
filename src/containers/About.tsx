'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="relative mb-10 uppercase tracking-[20px] text-3xl text-gray-300">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hello there!! I'm Anirudh and I am a Computer Vision Engineer by profession. 
            Also, I love building websites, hmmm.. call it a hobby XD
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a 
            start-up: {' '}
            
            <Link
              href="https://www.cyclopsmedtech.com/"
              target="_blank"
              className="text-accent"
            >
              Cyclops Medtech

            </Link>
            .
          </p>
          <p>

            At present, I am working as a freelance Computer Vision Consultant.

          </p>

          <p>
          With a strong foundation in my field of study, I am ready to embark on new challenges 
          and create impactful solutions in the world of Vision.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
