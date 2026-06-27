'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/data/testimonials';

const CARDS_DESKTOP = 3;

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + CARDS_DESKTOP < testimonials.length;

  function handlePrev() {
    if (canPrev) setCurrentIndex((i) => i - 1);
  }

  function handleNext() {
    if (canNext) setCurrentIndex((i) => i + 1);
  }

  const visibleDesktop = testimonials.slice(currentIndex, currentIndex + CARDS_DESKTOP);
  const visibleMobile = testimonials.slice(currentIndex, currentIndex + 1);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg">Real stories from real customers</p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {visibleDesktop.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden">
          {visibleMobile.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-lg transition-colors duration-200 ${
              canPrev
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Previous"
          >
            ←
          </button>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-lg transition-colors duration-200 ${
              canNext
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  id: string | number;
  name: string;
  city: string;
  loanType: string;
  rating: number;
  text: string;
  initials: string;
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  const avatarColors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-pink-500',
  ];
  const colorIndex = (t.name.charCodeAt(0) || 0) % avatarColors.length;

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col">
      <div className="text-orange-400 text-lg mb-3">{'★'.repeat(t.rating)}</div>
      <p className="text-gray-600 italic text-sm flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${avatarColors[colorIndex]}`}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{t.name}</p>
          <p className="text-xs text-gray-500">
            {t.city} &bull; {t.loanType}
          </p>
        </div>
      </div>
    </div>
  );
}
