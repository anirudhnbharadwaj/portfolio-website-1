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
      <h2 className="relative mb-10 uppercase tracking-[10px] text-3xl">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Greetings! I'm Anirudh, a passionate Computer Vision Engineer by profession. 
            Also, I love building websites. Hmmm, call it a hobby XD
          </p>
          <p>
            My journey began at Cyclops Medtech, 
            evolving into a freelance Computer Vision Consultant.
            
            {/* <Link
              href="https://www.cyclopsmedtech.com/"
              target="_blank"
              className="text-accent"
            >
              Cyclops Medtech

            </Link> */}
          </p>

          <p>
          Armed with a robust foundation, I'm poised to tackle fresh challenges and craft 
          impactful solutions in the dynamic realm of Computer Vision and Image Processing. 
          Ready to turn visions into reality! 🚀😊
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
