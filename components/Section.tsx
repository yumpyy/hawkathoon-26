import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  transform?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  backgroundColor = '#fff',
  textColor = '#000',
  transform = 'rotate(0deg)',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-10 overflow-hidden ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        borderTop: '4px solid black',
        borderBottom: '4px solid black',
      }}
    >
      <div
        className="w-full max-w-7xl flex flex-col items-center text-center"
        style={{
          transform,
        }}
      >
        <h2
          className="gsap-title text-6xl md:text-8xl font-black mb-12 uppercase"
          style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: `4px 4px 0px ${textColor === '#000' ? '#fff' : '#000'}`,
            WebkitTextStroke: `2px ${textColor === '#000' ? '#000' : '#fff'}`,
          }}
        >
          {title}
        </h2>
        <div className="gsap-content w-full flex flex-col items-center text-xl md:text-2xl font-bold font-mono">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
