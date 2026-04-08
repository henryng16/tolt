import React from 'react';
import { motion } from 'motion/react';
import { ScentPyramid as ScentPyramidType } from '../types';

interface ScentPyramidProps {
  pyramid: ScentPyramidType;
}

const ScentPyramid: React.FC<ScentPyramidProps> = ({ pyramid }) => {
  const sections = [
    { title: 'Top Notes', notes: pyramid.top, delay: 0.2 },
    { title: 'Heart Notes', notes: pyramid.heart, delay: 0.4 },
    { title: 'Base Notes', notes: pyramid.base, delay: 0.6 }
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {sections.map((section, idx) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: section.delay }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          <div className="md:col-span-1">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">
              {section.title}
            </span>
            <p className="font-serif text-2xl md:text-3xl mt-4 tracking-tight">
              {idx === 0 ? 'The First Impression' : idx === 1 ? 'The Soul of the Scent' : 'The Lasting Memory'}
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {section.notes.map((note) => (
              <div key={note.name} className="flex flex-col gap-2">
                <h4 className="font-serif text-xl tracking-tight">{note.name}</h4>
                <p className="font-sans text-sm leading-relaxed opacity-60">
                  {note.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScentPyramid;
