import React from 'react';
import { motion } from 'framer-motion';
import { cn, animations } from '@/lib/utils';

export function AnimatedContainer({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  once = true,
  as = 'div',
  ...rest
}) {
  const Component = motion[as];
  
  const preset = animations[animation] || animations.fadeUp;
  
  const animProps = {
    ...preset,
    transition: {
      ...(preset.transition || {}),
      delay: delay
    }
  };

  return (
    <Component
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: '-50px' }}
      variants={{
        initial: animProps.initial,
        animate: { ...animProps.animate, transition: animProps.transition }
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default AnimatedContainer;
