'use client';

import { useEffect, useState } from 'react';

interface Stat {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 1000, prefix: '', suffix: '+', label: 'Satisfied Customers' },
  { target: 50, prefix: '₹', suffix: ' Cr+', label: 'Loans Disbursed' },
  { target: 8, prefix: '', suffix: '+', label: 'Years Of Excellence' },
  { target: 15, prefix: '', suffix: '+', label: 'Bank Partners' },
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
    <section style={{ backgroundColor: '#1B3F8B' }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.prefix}
                <AnimatedCounter target={stat.target} />
                {stat.suffix}
              </div>
              <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
