// src/components/RotatingMetrics.jsx
import { useEffect, useState } from 'react';

import stateIcon from '../assets/state.svg';
import workshopIcon from '../assets/workshop.svg';
import mentorIcon from '../assets/mentor.svg';
import peopleIcon from '../assets/people.svg';
import projectIcon from '../assets/project.svg';

// === Math helpers ===
function polarToCartesian(cx, cy, radius, angle) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
  return [
    'M', cx, cy,
    'L', start.x, start.y,
    'A', r, r, 0, largeArc, 0, end.x, end.y,
    'Z',
  ].join(' ');
}

export default function RotatingMetrics() {
  const metrics = [
    {
      icon: stateIcon,
      label: 'States Reached',
      value: 'We’ve impacted 4 states.',
    },
    {
      icon: workshopIcon,
      label: 'Workshops',
      value: '98+ workshops hosted.',
    },
    {
      icon: mentorIcon,
      label: 'Industry Mentors',
      value: '75 experienced mentors.',
    },
    {
      icon: peopleIcon,
      label: 'Team Members',
      value: '24 dedicated professionals.',
    },
    {
      icon: projectIcon,
      label: 'Projects Delivered',
      value: '40+ successful projects.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  const sliceSize = 360 / metrics.length; // 72°

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* === Left === */}
        <div className="w-full md:w-1/3 text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2C8F] leading-tight">
            Together, We Create
            <br />
            <span className="block text-4xl md:text-6xl text-[#F6B000] font-serif font-extrabold">
              Our Impact
            </span>
          </h2>
          <p className="text-black text-lg leading-relaxed max-w-sm">
            Empowering communities and talent through real, measurable milestones.
          </p>
        </div>

        {/* === Center === */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-[300px] md:w-[400px] h-auto">
            {/* Pie slices */}
            {metrics.map((_, i) => {
              const startAngle = i * sliceSize;
              const endAngle = (i + 1) * sliceSize;
              return (
                <path
                  key={`slice-${i}`}
                  d={describeArc(200, 200, 190, startAngle, endAngle)}
                  fill={i === activeIndex ? '#F6B000' : '#ffffff'}
                  stroke="#ddd"
                  strokeWidth="2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveIndex(i)}
                />
              );
            })}

            {/* Icons inside SVG */}
            {metrics.map((m, i) => {
              const iconAngle = i * sliceSize + sliceSize / 2;
              const pos = polarToCartesian(200, 200, 115, iconAngle);

              return (
                <image
                key={`icon-${i}`}
                href={m.icon}
                width="44"
                height="44"
                x={pos.x - 18}
                y={pos.y - 18}
                onClick={() => setActiveIndex(i)}
                style={{
                  cursor: 'pointer',
                  transform: i === activeIndex ? 'scale(1.20)' : 'scale(1)',
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  transition: 'transform 0.2s',
                }}
              />
              );
            })}
          </svg>
        </div>

        {/* === Right === */}
        <div className="w-full md:w-1/3 text-left space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold text-[#2A2C8F]">
            {metrics[activeIndex].label}
          </h3>
          <p className="text-xl md:text-2xl text-[#F6B000] font-serif">
            {metrics[activeIndex].value}
          </p>
        </div>
      </div>
    </section>
  );
}
