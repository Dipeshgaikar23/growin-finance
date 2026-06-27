import Button from '@/components/ui/Button'
import { LoanData } from '@/lib/data/loans'

interface LoanHeroProps {
  loan: LoanData
}

export default function LoanHero({ loan }: LoanHeroProps) {
  return (
    <section
      className="relative w-full py-20"
      style={{ background: 'linear-gradient(135deg, #1B3F8B 0%, #2563EB 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-blue-200">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><span className="text-blue-300">/</span></li>
            <li><a href="/loans" className="hover:text-white transition-colors">Loans</a></li>
            <li><span className="text-blue-300">/</span></li>
            <li className="text-white font-medium">{loan.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Interest Rate Badge */}
            <div className="inline-flex items-center mb-4">
              <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                Starting @ {loan.interestRate}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {loan.name}
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {loan.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="white" size="lg" href="/contact">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" href="/emi-calculator">
                Calculate EMI
              </Button>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Loan at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Interest Rate</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.interestRate}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Max Amount</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.maxAmount}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Max Tenure</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.tenure}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">Processing Fee</p>
                  <p className="text-2xl font-bold text-blue-600">{loan.processingFee}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
