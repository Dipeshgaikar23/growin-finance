'use client';

import { useEffect, useState } from 'react';

interface Stat {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { target: 1000, prefix: '', suffix: '+', label: 'Satisfied Customers', icon: '😊' },
  { target: 50, prefix: '₹', suffix: ' Cr+', label: 'Loans Disbursed', icon: '💰' },
  { target: 8, prefix: '', suffix: '+', label: 'Years Of Excellence', icon: '🏆' },
  { target: 15, prefix: '', suffix: '+', label: 'Bank Partners', icon: '🏦' },
];

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    const intervalTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
}

export default function StatsBar() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Navy overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1B3F8B', opacity: 0.92 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                {stat.prefix}
                <AnimatedCounter target={stat.target} />
                {stat.suffix}
              </div>
              <div className="text-blue-200 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
