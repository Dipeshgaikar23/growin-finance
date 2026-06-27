import Link from 'next/link';
import { loans } from '@/lib/data/loans';

export default function LoanTypesGrid() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Loan Products
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tailored financial solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-xl shadow p-6 border border-transparent hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              <div className="text-4xl mb-4">{loan.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{loan.name}</h3>
              <div className="mb-3">
                <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-medium">
                  From {loan.interestRate}% p.a.
                </span>
              </div>
              <p className="text-gray-600 text-sm flex-1 mb-5">{loan.tagline}</p>
              <Link
                href={`/loans/${loan.slug}`}
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
              >
                Know More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
