import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '@/lib/utils';

export default function QuickStats() {
  const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '20+', label: 'Technologies Used' },
    { value: '4+', label: 'Years Learning' },
    { value: '100%', label: 'Responsive Design' },
  ];

  return (
    <section className="py-16 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animations.staggerContainer}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={animations.fadeUp}>
              <div className="text-3xl sm:text-4xl font-bold text-text-primary font-sans">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm mt-1 font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
