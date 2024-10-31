import { motion, MotionProps } from 'framer-motion';
import { ElementType, HTMLAttributes, ReactNode, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = forwardRef<HTMLElement, Props & MotionProps>(({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}, ref) => {
  const MotionTag = animate ? motion[as as keyof typeof motion] : motion.section;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <MotionTag ref={ref} id={id} className={`py-24 md:py-32 ${className}`} {...rest}>
      {children}
    </MotionTag>
  );
});

export default Wrapper;
