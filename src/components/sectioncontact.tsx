"use client";
import React from 'react';
import Contact from './contact';

type SectionContactsProps = React.HTMLProps<HTMLDivElement>;

const SectionContacts = React.forwardRef<HTMLDivElement, SectionContactsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative flex justify-center items-center bg-white h-max z-1"
      {...props} // Spread props to ensure any passed props are applied
    >
      <Contact />
    </section>
  );
});

SectionContacts.displayName = 'SectionContacts'; // This is needed to give a name to the component in the React DevTools

export default SectionContacts;
