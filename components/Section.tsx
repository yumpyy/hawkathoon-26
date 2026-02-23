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
      className={`relative w-full min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-10 overflow-hidden ${className}`}
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
          className="gsap-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 uppercase tracking-normal"
          style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: `2px 2px 0px ${textColor === '#000' ? '#fff' : '#000'}`,
            WebkitTextStroke: `0.5px ${textColor === '#000' ? '#000' : '#fff'}`,
            letterSpacing: '0em',
          }}
        >
          {title}
        </h2>
        <div className="gsap-content w-full flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-mono tracking-normal">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
