import Button from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    emoji: '📝',
    title: 'Apply Online',
    desc: 'Fill our simple form with your basic details in under 2 minutes',
  },
  {
    number: '02',
    emoji: '🔍',
    title: 'Document Verification',
    desc: 'Our experts verify your documents quickly — we come to you',
  },
  {
    number: '03',
    emoji: '💰',
    title: 'Loan Disbursal',
    desc: 'Get funds directly in your bank account within 48 hours',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white" style={{ opacity: 0.93 }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3" style={{ color: '#1B3F8B' }}>
            How It Works
          </h2>
          <p className="text-gray-500 text-lg">Get your loan approved in three simple steps</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-14">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-row md:flex-col items-start md:items-center gap-4 flex-1">
              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl shadow-lg border border-blue-50 p-8 text-center hover:shadow-xl transition-shadow duration-200 flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg mb-4 shadow-md"
                  style={{ backgroundColor: '#1B3F8B' }}
                >
                  {step.number}
                </div>
                <div className="text-4xl mb-3">{step.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center">
                  <span className="text-3xl" style={{ color: '#F97316' }}>→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact" variant="primary" size="lg">
            Get Started Today →
          </Button>
        </div>
      </div>
    </section>
  );
}
