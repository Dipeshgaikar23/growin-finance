'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const [income, setIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [submitted, setSubmitted] = useState(false);

  function handleEligibilityCheck(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2563EB 100%)' }}
      className="min-h-[90vh] flex items-center py-16 px-4"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            🏆 Mumbai&apos;s Trusted Loan Partner
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get Your Dream Loan
            <br />
            <span className="text-orange-500">Approved in 48 Hours</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8 max-w-lg">
            Quick, hassle-free loans tailored for Mumbai residents. From home loans to personal
            loans — we&apos;ve got you covered with the best rates and fastest approvals.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="primary" href="/contact">
              Apply Now
            </Button>
            <a
              href="/emi-calculator"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200"
            >
              Calculate EMI
            </a>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '😊', number: '1000+', label: 'Happy Customers' },
              { icon: '💰', number: '₹50Cr+', label: 'Disbursed' },
              { icon: '📅', number: '8+', label: 'Years Experience' },
              { icon: '🏦', number: '15+', label: 'Bank Partners' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/20 rounded-xl p-3 text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold">{stat.number}</div>
                <div className="text-xs text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Quick Eligibility Check */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Eligibility Check</h2>
            <p className="text-gray-500 text-sm mb-6">Find out if you qualify in seconds</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <p className="text-green-700 font-semibold text-lg">
                  You may be eligible!
                </p>
                <p className="text-green-600 text-sm mt-2">
                  Our team will reach out to you with the best offers.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-blue-600 underline"
                >
                  Check again
                </button>
              </div>
            ) : (
              <form onSubmit={handleEligibilityCheck} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income (₹)
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="e.g. 50000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount Required (₹)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="e.g. 500000"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Salaried</option>
                    <option>Self-Employed</option>
                    <option>Business Owner</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: '#1B3F8B' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor = '#163272')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.backgroundColor = '#1B3F8B')
                  }
                >
                  Check Eligibility
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
