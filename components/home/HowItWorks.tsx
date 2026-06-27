import Button from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    emoji: '📝',
    title: 'Apply Online',
    desc: 'Fill our simple form with your details',
  },
  {
    number: '02',
    emoji: '🔍',
    title: 'Document Verification',
    desc: 'Our experts verify your documents quickly',
  },
  {
    number: '03',
    emoji: '💰',
    title: 'Loan Disbursal',
    desc: 'Get funds in your account within 48 hours',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-500 text-lg">Get your loan in three simple steps</p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-0 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 flex-1">
              <div className="flex flex-col md:items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: '#1B3F8B' }}
                >
                  {step.number}
                </div>
                <div className="text-3xl mt-4">{step.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 text-center">{step.title}</h3>
                <p className="text-gray-600 mt-1 text-sm text-center max-w-[160px]">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-4 mt-[-40px]">
                  <span className="text-blue-400 text-2xl font-bold">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact" variant="primary">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
