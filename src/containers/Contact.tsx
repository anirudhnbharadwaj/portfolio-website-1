import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-5 font-mono text-sm uppercase tracking-[10px] text-accent">
        {subtitle}
      </p>
      <h2 className="mb-7 uppercase tracking-[10px] text-1.5xl">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button>
    </Wrapper>
  );
};

export default Contact;
